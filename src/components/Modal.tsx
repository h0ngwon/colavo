import { ReactNode } from "react";
import "../styles/Modal.css";

interface Props {
  isOpen?: boolean;
  children: ReactNode;
}

const Modal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
