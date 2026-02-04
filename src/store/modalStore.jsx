import { create } from "zustand";

const modalRegistry = {};

export const registerModal = (name, component) => {
  modalRegistry[name] = component;
};

export const renderModalContent = (name, props) => {
  const Component = modalRegistry[name];
  if (!Component) return null;
  return <Component {...props} />;
};

export const useModalStore = create((set) => ({
  isOpen: false,
  modalName: null,
  props: {},

  openModal: (name, props = {}) => set({ isOpen: true, modalName: name, props }),
  closeModal: () => set({ isOpen: false, modalName: null, props: {} }),
}));