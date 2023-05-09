
import ref from './ref';
import { ModalProps } from 'antd';

const useDialog = () => {
  const isShow = ref(false);
  const content = ref<string | React.FC | undefined>(undefined);
  const dialogOptions = ref<ModalProps>({});
  const show = (newContent: string | React.FC, opt: ModalProps) => {
    content.value = newContent;
    dialogOptions.value = opt;
  }

  return {
    isShow,
    content,
    dialogOptions,
    show,
  }
}

export default useDialog;