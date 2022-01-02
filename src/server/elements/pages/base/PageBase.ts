import * as express from "express"

export class PageBase {
  errorsRouter = express.Router()

  public constructor() {
    // Handle errors
    this.errorsRouter.use(function (req, res, next) {
      const err: any = new Error("Not Found")
      err.status = 404
      next(err)
    })

    this.errorsRouter.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get("env") === "development" ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.render("error")
    })
  }

  getErrorsRouter(): express.Router {
    return this.errorsRouter
  }

  getPath(): string {
    return __dirname
  }
}
