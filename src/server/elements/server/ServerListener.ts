import { IPageMain } from "../pages/main/PageMain"
import express from 'express';
import * as path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import hbs from 'hbs';

export class ServerListener implements IPageMain {
  private FAVICON_PATH: string = "../../../client/app/assets/favicon.png"

  public express = express()
  expressViews: Array<string> = new Array()

  constructor() {}

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
    this.express.use("/client-libs", express.static(path.join(__dirname, "../../../../client-libs")))
  }

  public addViewPath(viewsPath: string) {
    this.expressViews.push(viewsPath)
    this.express.set("views", this.expressViews)
    hbs.registerPartials(viewsPath)
  }

  renderPage = (res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean) => {
    const year = new Date().getFullYear();
    res.render(viewName, {
      title,
      description,
      layout: "layout",
      keywords,
      disableIndexing,
      year
    })
  }
}
