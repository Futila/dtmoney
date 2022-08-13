import { ReactNode } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

interface UiModalprops {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function UiModal({ children, isOpen, onRequestClose }: UiModalprops) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      {children}
    </Modal>
  );
}
