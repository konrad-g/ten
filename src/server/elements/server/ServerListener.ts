import { IPageMain } from "../pages/main/PageMain"
import express from "express"
import * as path from "path"
import favicon from "serve-favicon"
import logger from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import hbs from "hbs"
import { Git } from "../Git"

export class ServerListener implements IPageMain {
  private FAVICON_PATH: string = "../../../client/app/assets/favicon.png"

  isProduction: boolean
  private commitNumber: string = Git.getCurrentCommitNumber(null) ?? Date.now().toString()

  public express = express()
  expressViews: Array<string> = new Array()

  constructor(isProduction: boolean) {
    this.isProduction = isProduction
  }

  init = () => {
    // view engine setup
    this.express.set("view engine", "hbs")
    this.express.use(favicon(path.join(__dirname, this.FAVICON_PATH)))

    this.express.use(logger("dev"))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(cookieParser())

    this.express.use("/src/client", express.static(path.join(__dirname, "../../../../src/client")))
    this.express.use("/dist", express.static(path.join(__dirname, "../../../../dist")))
  }

  public addViewPath(viewsPath: string) {
    this.expressViews.push(viewsPath)
    this.express.set("views", this.expressViews)
    hbs.registerPartials(viewsPath)
  }

  renderPage = (res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean) => {
    const year = new Date().getFullYear()

    let clientFilesId = ""
    if (this.isProduction) {
      clientFilesId = this.commitNumber ?? Date.now().toString()
    } else {
      // Invalidate cache in development mode
      clientFilesId = Date.now().toString()
    }

    res.render(viewName, {
      title,
      description,
      layout: "layout",
      keywords,
      disableIndexing,
      clientFilesId,
      isProduction: this.isProduction,
      year
    })
  }
}
