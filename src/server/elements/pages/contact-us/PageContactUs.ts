import * as path from "path"

export interface IPageContactUs {
  renderPage(res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean)
  addViewPath(viewsPath: string)
}

export class PageContactUs {
  TITLE: string = "Contact Us"
  DESCRIPTION: string = "Contact us page"
  KEYWORDS: string = "node.js,ten,contact us"
  DISABLE_INDEXING: boolean = false
  VIEW: string = "contact-us"

  listener: IPageContactUs

  public static render(listener: IPageContactUs): Function {
    const page = new PageContactUs(listener)
    return page.render
  }

  public constructor(listener: IPageContactUs) {
    this.listener = listener
    this.listener.addViewPath(path.join(__dirname, path.sep + "views"))
  }

  render = (req, res, next) => {
    this.listener.renderPage(res, this.VIEW, this.TITLE, this.DESCRIPTION, this.KEYWORDS, this.DISABLE_INDEXING)
  }
}
