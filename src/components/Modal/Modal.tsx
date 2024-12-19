import { CircleX } from "lucide-react";
import { ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div />
          <button onClick={onClose} className="modal-close-btn">
            <CircleX color="gray"/>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
