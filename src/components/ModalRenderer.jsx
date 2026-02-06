import { Modal } from "antd";
import { useModalStore, renderModalContent } from "../store/modalStore";

const ModalRenderer = () => {
  const { isOpen, modalName, modalTitle, props, closeModal } = useModalStore();

  if (!isOpen || !modalName || !modalTitle) return null;

  const content = renderModalContent(modalName, { ...props, closeModal });
  if (!content) return null;

  return (
    <Modal
      title={modalTitle}
      open={isOpen}
      onCancel={closeModal}
      footer={null}
      destroyOnHidden
      centered
      maskClosable={true}
      keyboard={true}
      className="custom-modal"
      {...props.modalOptions}
    >
      {content}
    </Modal>
  );
};

export default ModalRenderer;
