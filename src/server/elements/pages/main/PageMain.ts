import * as express from "express"
import { IPageMain } from "./IPageMain"

export class PageMain {
  TITLE: string = "TEN stack"
  DESCRIPTION: string = "Starter app for TEN stack: TypeScript + Express + Node.js"
  KEYWORDS: string = "node.js,ten"
  DISABLE_INDEXING: boolean = false
  VIEW: string = "view-page-main"

  listener: IPageMain
  router = express.Router()

  public constructor(listener: IPageMain) {
    this.listener = listener
    var self = this

    this.router.get("/", function (req, res, next) {
      listener.renderPage(res, self.VIEW, self.TITLE, self.DESCRIPTION, self.KEYWORDS, self.DISABLE_INDEXING)
    })
  }

  getRouter(): express.Router {
    return this.router
  }

  getPath(): string {
    return __dirname
  }
}
