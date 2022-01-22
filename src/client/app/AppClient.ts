import { Toast } from "./../elements/toast/Toast"
import Pjax from "./../../../client-libs/node_modules/pjax"
import "./styles/style.scss"
import "./../../../client-libs/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../../client-libs/node_modules/bootstrap/dist/js/bootstrap.min.js"
import "./../../../client-libs/node_modules/nprogress/nprogress.css"
import NProgress from "./../../../client-libs/node_modules/nprogress/nprogress.js"
import { PagesCtrl } from "../elements/pages/PagesCtrl"
import { MainPage } from "../elements/pages/MainPage"
import { ContactUsPage } from "../elements/pages/ContactUsPage"

export class AppClient {
  initiated = false
  toastLogger: Toast
  pagesCtrl: PagesCtrl

  constructor() {}

  start = () => {
    if (this.initiated) return
    this.initiated = true
    this.toastLogger = new Toast(document.body)
    this.setupPjax()

    this.pagesCtrl = new PagesCtrl()
    this.pagesCtrl.addPage(new MainPage(this))
    this.pagesCtrl.addPage(new ContactUsPage(this))
  }

  setupPjax = () => {
    const self = this

    document.addEventListener("DOMContentLoaded", () => {
      new Pjax({ selectors: ['title', 'header', 'main'] })
      NProgress.configure({ parent: "body", showSpinner: false });
      self.pagesCtrl.setupPage()
    })

    document.addEventListener("pjax:send", () => {
      NProgress.start();
    });
    
    document.addEventListener("pjax:complete", () => {
      NProgress.done();
    });
    
    document.addEventListener("pjax:error", () => {
      NProgress.done();
    });
    
    document.addEventListener("pjax:success", () => {
      NProgress.done();
      self.pagesCtrl.setupPage()
    });
  }

  getToast = () => {
    return this.toastLogger
  }
}

// Boot
const app = new AppClient()
app.start()
