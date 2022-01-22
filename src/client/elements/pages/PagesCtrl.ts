export interface Page {
  getPageId(): string
  execute(): void
  onPageClose(): void
}

export class PagesCtrl {
  private pages: Array<Page> = new Array()
  private currentPage

  public constructor() {
    this.pages = new Array()
  }

  public addPage = (page: Page) => {
    this.pages.push(page)
  }

  public getCurrentPageId = () => {
    if (!this.currentPage) return ""
    return this.currentPage.getPageId()
  }

  public setupPage = () => {
    this.closePage()

    let page = this.executeCurrentPageLogic()
    if (page) this.currentPage = page
  }

  private closePage = () => {
    if (this.currentPage) {
      this.currentPage.onPageClose()
      this.currentPage = null
    }
  }

  private executeCurrentPageLogic = () => {
    const pageIdElement: any = document.querySelector("#pageId")
    if (!pageIdElement) return

    pageIdElement.parentNode.removeChild(pageIdElement)
    const pageId = pageIdElement.innerText

    if (!pageId || pageId.length === 0) return

    for (let i = 0; i < this.pages.length; i++) {
      let page: Page = this.pages[i]

      if (pageId == page.getPageId()) {
        page.execute()
        return page
      }
    }

    return null
  }
}
