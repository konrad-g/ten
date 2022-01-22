import { Story, Meta } from '@storybook/html';
import { Toast } from '../toast/Toast';
import { MainPage } from './MainPage';

export default {
  title: 'App/MainPage',
} as Meta;

const Template: Story = () => {

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = "showToast"
  btn.innerText = "Show Toast";

  const onDomLoaded = () => {
    const page = new MainPage({
      getToast: () => new Toast(document.body)
    })
    page.execute()
    document.removeEventListener("DOMContentLoaded", onDomLoaded)
  }

  document.addEventListener("DOMContentLoaded", onDomLoaded)

  return btn;
};

export const Main = Template.bind({});

