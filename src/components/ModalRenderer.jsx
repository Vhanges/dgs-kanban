import { Modal } from "antd";
import { useModalStore, renderModalContent } from "../store/modalStore";

const ModalRenderer = () => {
  const { isOpen, modalName, props, closeModal } = useModalStore();

  if (!isOpen || !modalName) return null;

  const content = renderModalContent(modalName, { ...props, closeModal });
  if (!content) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      destroyOnHidden
      {...props.modalOptions}
    >
      {content}
    </Modal>
  );
};

export default ModalRenderer;