import { Story, Meta } from '@storybook/html';
import { Toast } from './Toast';

export interface Props {
   type: string;
}

export default {
  title: 'App/Toast',
} as Meta;

const Template: Story<Props> = ({
  type = 'info',
}: Props) => {

  const onClick = () => {
    const toast = new Toast(document.body)
    if (type === "success") {
      toast.showSuccess('Success', 'Toast works!')
    } else if (type === "info") {
      toast.showInfo('Info', 'Toast works!')
    } else if (type === "warning") {
      toast.showWarning('Warning', 'Toast works!')
    } else if (type === "error") {
      toast.showError('Error', 'Toast works!')
    }
  }

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = "Show Toast";
  btn.addEventListener('click', onClick);
  return btn;
};

export const ToastSuccess = Template.bind({});
ToastSuccess.args = {
  type: 'success',
};

export const ToastInfo = Template.bind({});
ToastInfo.args = {
  type: 'info',
};

export const ToastWarning = Template.bind({});
ToastWarning.args = {
  type: 'warning',
};

export const ToastError = Template.bind({});
ToastError.args = {
  type: 'error',
};
