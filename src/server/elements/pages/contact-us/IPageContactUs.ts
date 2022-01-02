import { PageMain } from "../main/PageMain";

export interface IPageContactUs {
  renderPage(res, viewName: string, title: string, description: string, keywords: string, disableIndexing: boolean)
  addViewPath(viewsPath: string)
}
