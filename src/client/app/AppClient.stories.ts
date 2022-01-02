import { Story, Meta } from '@storybook/html';
import { AppClient } from './AppClient';

export default {
  title: 'Pages/Main',
  argTypes: {
  },
} as Meta;

export const MainPage: Story = () => {
  const base = document.createElement('div');
  base.innerHTML = "<button id='showToast'>Show random toast</button>"
  const appClient = new AppClient()
  appClient.start()
  return base;
};
