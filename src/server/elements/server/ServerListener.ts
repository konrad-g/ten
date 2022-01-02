import { IPageMain } from "../pages/main/IPageMain"

const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const hbs = require("hbs")

export class ServerListener implements IPageMain {
  private FAVICON_PATH: string = "../../../client/app/assets/favicon.png"

  public express = express()
  expressViews: Array<string> = new Array()

  constructor() {}

  init() {
    // view engine setup
    this.express.set("view engine", "hbs")
    this.express.use(favicon(path.join(__dirname, this.FAVICON_PATH)))

    this.express.use(logger("dev"))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(cookieParser())

    this.express.use("/src/client", express.static(path.join(__dirname, "../../../../src/client")))
    this.express.use("/dist", express.static(path.join(__dirname, "../../../../dist")))
    this.express.use("/client-libs", express.static(path.join(__dirname, "../../../../client-libs")))
  }

  public addViewPath(viewsPath: string) {
    this.expressViews.push(viewsPath)
    this.express.set("views", this.expressViews)
    hbs.registerPartials(viewsPath)
  }

  renderPage(res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean) {
    res.render(viewName, {
      title: title,
      description: description,
      keywords: keywords,
      disableIndexing: disableIndexing,
      layout: "layout"
    })
  }
}
