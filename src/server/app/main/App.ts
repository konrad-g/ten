import { PageContactUs } from "../../elements/pages/contact-us/PageContactUs"
import { PageMain } from "../../elements/pages/main/PageMain"
import { ServerListener } from "../../elements/server/ServerListener"

export class App {
  router: any
  listener: ServerListener

  constructor(router: any, listener: ServerListener) {
    this.router = router
    this.listener = listener
  }

  setupRoutes = () => {
    this.router.get("/", PageMain.render(this.listener))
    this.router.get("/contact-us", PageContactUs.render(this.listener))
  }
}
