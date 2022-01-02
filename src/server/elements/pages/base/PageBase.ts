import * as path from 'path';
import { IPageBase } from './IPageBase';

export class PageBase {
  
  private router: any
  private listener: IPageBase

  public constructor(router: any, listener: IPageBase) {
    this.router = router
    this.listener = listener
  }

  public setup = () => {
    this.listener.addViewPath(path.join(__dirname, path.sep + "views"));
    
    // Handle errors
    this.router.use(function (req, res, next) {
      const err: any = new Error("Not Found")
      err.status = 404
      next(err)
    })

    this.router.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get("env") === "development" ? err : {}

      // render the error page
      res.status(err.status || 500)
      res.render("error")
    })
  }
}
