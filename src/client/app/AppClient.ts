import { Toast } from "./../elements/toast/Toast"
import Pjax from "./../../../client-libs/node_modules/pjax"
import "./styles/style.scss"
import "./../../../client-libs/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../../client-libs/node_modules/bootstrap/dist/js/bootstrap.min.js"

export class AppClient {
  initiated = false
  toastLogger: Toast

  constructor() {}

  start() {
    if (this.initiated) return
    this.initiated = true

    const self = this

    self.toastLogger = new Toast(document.body)
    let pjax = new Pjax()

    document.querySelector("#showToast").addEventListener("click", () => {
      const results = 5
      const executeToast = results * Math.random()

      if (executeToast < 1) {
        self.toastLogger.showInfo("This is info. It is really long and it doesn't really fit into this small toast", "This is info message")
      } else if (executeToast < 2) {
        self.toastLogger.showWarning("This is warning", "This is warning message.")
      } else if (executeToast < 3) {
        self.toastLogger.showSuccess("Success", "You made it. Congratulations!")
      } else if (executeToast < 4) {
        self.toastLogger.showError("This is error", "This is error message.")
      } else if (executeToast <= 5) {
        self.showMultipleToasts()
      }
    })
  }

  showMultipleToasts() {
    this.toastLogger.showInfo("This is info", "This is info message")
    this.toastLogger.showSuccess("Success", "You made it. Congratulations!")
    this.toastLogger.showWarning("This is warning", "This is warning message")
    this.toastLogger.showError("This is error", "This is error message")
  }
}

// Boot
const app = new AppClient()
app.start()
