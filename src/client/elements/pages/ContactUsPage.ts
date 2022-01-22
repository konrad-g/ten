import { Toast } from "../toast/Toast"
import { Page } from "./PagesCtrl"

export interface IContactUsPage {
  getToast: () => Toast
}

export class ContactUsPage implements Page {
  private listener: IContactUsPage

  constructor(listener: IContactUsPage) {
    this.listener = listener
  }

  public getPageId = (): string => {
    return "contact-us"
  }

  public execute = () => {
    const toast = this.listener.getToast()
    toast.showInfo("You can contact us by email", "hello@email.com")
  }

  public onPageClose = () => {}
}
