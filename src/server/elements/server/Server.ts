import { ServerListener } from "./ServerListener"
import cluster from "cluster"
import { App } from "../../app/main/App"
import { PageBase } from "../pages/base/PageBase"
import debug from "debug"
import livereload from "livereload"
import connectLiveReload from "connect-livereload"
import * as http from "http"
import * as os from "os"

export class Server {
  port
  server
  debug = debug("final:server")
  numCPUs = os.cpus().length
  isProduction: boolean
  appListener: ServerListener

  constructor(isProduction: boolean) {
    this.isProduction = isProduction
    this.appListener = new ServerListener(isProduction)
    this.appListener.init()
  }

  start = () => {
    const appExpress = this.getExpress()
    this.port = this.normalizePort(process.env.PORT || "3000")
    appExpress.set("port", this.port)

    this.server = http.createServer(appExpress)

    if (!this.isProduction) {
      // Automatically refresh page when server reboots
      appExpress.use(connectLiveReload())
      const liveReloadServer = livereload.createServer()
      liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
          liveReloadServer.refresh("/")
        }, 100)
      })
    }

    // Use multi-core on production
    if (this.isProduction && cluster.isPrimary) {
      console.log("Main cluster setting up " + this.numCPUs + " workers...")
      for (let i = 0; i < this.numCPUs; i++) {
        cluster.fork()
      }

      cluster.on("online", function (worker) {
        console.log("Worker " + worker.process.pid + " is online")
      })

      cluster.on("exit", function (worker, code, signal) {
        console.log("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal)
        console.log("Starting a new worker")
        cluster.fork()
      })
    } else {
      this.server.listen(this.port)
      this.server.on("error", (error) => {
        this.onError(error)
      })
      this.server.on("listening", () => {
        this.onListening()
      })
    }

    // Run app
    const app = new App(appExpress, this.appListener)
    app.setupRoutes()

    const pageBase = new PageBase(appExpress, this.appListener)
    pageBase.setup()
  }

  getExpress = () => {
    return this.appListener.express
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  normalizePort = (val) => {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
      // named pipe
      return val
    }

    if (port >= 0) {
      // port number
      return port
    }

    return false
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  onError = (error) => {
    if (error.syscall !== "listen") {
      throw error
    }

    const bind = typeof this.port === "string" ? "Pipe " + this.port : "Port " + this.port

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges")
        process.exit(1)
        break
      case "EADDRINUSE":
        console.error(bind + " is already in use")
        process.exit(1)
        break
      default:
        throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  onListening = () => {
    const addr = this.server.address()
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
    this.debug("Listening on " + bind)
  }
}
