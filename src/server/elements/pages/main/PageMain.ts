import * as path from "path"

export interface IPageMain {
  renderPage(res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean)
  addViewPath(viewsPath: string)
}

export class PageMain {
  TITLE: string = "TEN stack"
  DESCRIPTION: string = "Starter app for TEN stack: TypeScript + Express + Node.js"
  KEYWORDS: string = "node.js,ten"
  DISABLE_INDEXING: boolean = false
  VIEW: string = "main"

  listener: IPageMain

  public static render(listener: IPageMain): Function {
    const page = new PageMain(listener)
    return page.render
  }

  public constructor(listener: IPageMain) {
    this.listener = listener
    this.listener.addViewPath(path.join(__dirname, path.sep + "views"))
  }

  render = (req, res, next) => {
    this.listener.renderPage(res, this.VIEW, this.TITLE, this.DESCRIPTION, this.KEYWORDS, this.DISABLE_INDEXING)
  }
}
