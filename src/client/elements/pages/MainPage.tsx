import { Toast } from "../toast/Toast"
import { Page } from "./PagesCtrl"
import { createRoot } from 'react-dom';

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
    const root = createRoot(document.getElementById('app'));
    root.render(<h1>Hello, world</h1>);
  }

  public onPageClose = () => {}
}
