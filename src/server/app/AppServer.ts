import {AppServerListener} from "./AppServerListener";
import {CommonPageMain} from "./models/CommonPageMain";
import {CommonPageBase} from "./models/CommonPageBase";

export class AppServer {

  port;
  server;
  debug = require('debug')('final:server');
  http = require('http');
  cluster = require('cluster');
  numCPUs = require('os').cpus().length;
  isProduction: boolean;
  appListener: AppServerListener = new AppServerListener();

  constructor(isProduction: boolean) {
    this.isProduction = isProduction;
    this.appListener.init();
  }

  start() {

    var self = this;

    self.port = self.normalizePort(process.env.PORT || '3000');
    self.getExpress().set('port', self.port);

    self.server = self.http.createServer(self.getExpress());

    // Use multi-core on production
    if (self.isProduction && self.cluster.isMaster) {
      console.log('Master cluster setting up ' + self.numCPUs + ' workers...');
      for (var i = 0; i < self.numCPUs; i++) {
        self.cluster.fork();
      }

      self.cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
      });

      self.cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        self.cluster.fork();
      });

    } else {
      self.server.listen(self.port);
      self.server.on('error', (error) => {self.onError(error);});
      self.server.on('listening', () => {self.onListening();});
    }

    // Page base
    var pageBase: CommonPageBase = new CommonPageBase();
    self.appListener.registerPage(pageBase);

    // Page main
    var pageMain: CommonPageMain = new CommonPageMain(self.appListener);
    self.appListener.registerPage(pageMain);

    // Routes
    self.appListener.express.use('/', pageMain.getRouter());
    self.appListener.express.use('/', pageBase.getErrorsRouter());
  }

  getExpress() {
    return this.appListener.express;
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof this.port === 'string'
      ? 'Pipe ' + this.port
      : 'Port ' + this.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  onListening() {
    var addr = this.server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    this.debug('Listening on ' + bind);
  }
}
