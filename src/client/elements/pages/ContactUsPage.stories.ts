import { Story, Meta } from "@storybook/html"
import { Toast } from "../toast/Toast"
import { ContactUsPage } from "./ContactUsPage"

export default {
  title: "App/ContactUsPage"
} as Meta

const Template: Story = () => {
  const btn = document.createElement("div")
  btn.innerText = "Contact Us"

  const onDomLoaded = () => {
    const page = new ContactUsPage({
      getToast: () => new Toast(document.body)
    })
    page.execute()
    document.removeEventListener("DOMContentLoaded", onDomLoaded)
  }

  document.addEventListener("DOMContentLoaded", onDomLoaded)

  return btn
}

export const Main = Template.bind({})
