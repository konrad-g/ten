import "./styles/main.scss"

export class Toast {
  private static FADE_MS = 400
  private REMOVE_TIME_MS = 10000

  private parent: any
  private duration

  constructor(parent: any) {
    this.parent = parent
    this.duration = this.REMOVE_TIME_MS
  }

  public showSuccess(title: string, message: string) {
    const text: string = this.getCustomToast(title, message, "success")
    this.addToast(text)
  }

  public showInfo(title: string, message: string) {
    const text: string = this.getCustomToast(title, message, "info")
    this.addToast(text)
  }

  public showWarning(title: string, message: string) {
    const text: string = this.getCustomToast(title, message, "warning")
    this.addToast(text)
  }

  public showError(title: string, message: string) {
    const text: string = this.getCustomToast(title, message, "error")
    this.addToast(text)
  }

  private getCustomToast(title: string, message: string, type: string): string {
    const text: string =
      '<div class="dj-toast-icon-' +
      type +
      '"></div>' +
      '<div class="dj-toast-text"><div class="dj-toast-title">' +
      title +
      '</div><div class="dj-toast-message">' +
      message +
      "</div></div>"
    return text
  }

  private addToast(toastHtml: string): any {
    const _this = this

    const container: any = this.getContainer()
    const toast: any = document.createElement("div")
    toast.className = "dj-toast hide"
    toast.innerHTML = toastHtml
    container.append(toast)

    // Add close button
    const closeBtn: any = document.createElement("div")
    closeBtn.className = "dj-toast-icon-close"
    toast.append(closeBtn)

    closeBtn.addEventListener("click", () => {
      _this.removeToast(toast)
    })
    setTimeout(() => {
      _this.removeToast(toast)
    }, _this.duration)

    setTimeout(() => {
      toast.classList.add("show")
      toast.classList.remove("hide")
    }, Toast.FADE_MS)

    return toast
  }

  private getContainer(): any {
    const container = document.querySelector(".dj-toast-container")
    if (!!container) return container

    // Container doesn't exist
    const newContainer = document.createElement("div")
    newContainer.className = "dj-toast-container"
    this.parent.append(newContainer)
    return newContainer
  }

  private removeToast(toast: any) {
    toast.classList.add("hide")
    toast.classList.remove("show")

    setTimeout(() => {
      toast.remove()
    }, Toast.FADE_MS)
  }
}
