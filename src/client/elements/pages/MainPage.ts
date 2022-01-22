import { Toast } from "../toast/Toast"
import { Page } from "./PagesCtrl"

export interface IMainPage {
  getToast: () => Toast
}

export class MainPage implements Page {
  private listener: IMainPage

  constructor(listener: IMainPage) {
    this.listener = listener
  }

  public getPageId = (): string => {
    return "main"
  }

  public execute = () => {
    const toast = this.listener.getToast()
    const showToast = document.querySelector("#showToast")
    showToast.addEventListener("click", () => {
      const results = 5
      const executeToast = results * Math.random()

      if (executeToast < 1) {
        toast.showInfo("This is info. It is really long and it doesn't really fit into this small toast", "This is info message")
      } else if (executeToast < 2) {
        toast.showWarning("This is warning", "This is warning message.")
      } else if (executeToast < 3) {
        toast.showSuccess("Success", "You made it. Congratulations!")
      } else if (executeToast < 4) {
        toast.showError("This is error", "This is error message.")
      } else if (executeToast <= 5) {
        this.showMultipleToasts()
      }
    })
  }

  private showMultipleToasts = () => {
    const toast = this.listener.getToast()
    toast.showInfo("This is info", "This is info message")
    toast.showSuccess("Success", "You made it. Congratulations!")
    toast.showWarning("This is warning", "This is warning message")
    toast.showError("This is error", "This is error message")
  }

  public onPageClose = () => {}
}
