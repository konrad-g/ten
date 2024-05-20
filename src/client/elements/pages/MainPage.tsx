import { Toast } from "../toast/Toast"
import { Page } from "./PagesCtrl"
import { createRoot } from "react-dom/client"
import React from "react"

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
    const root = createRoot(document.getElementById("app"))
    root.render(<Page />)
  }

  public onPageClose = () => {}
}

const Page = () => {
  return (
    <div>
      <h1>This is a main page</h1>
    </div>
  )
}
