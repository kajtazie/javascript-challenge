import { CircleX } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-xl overflow-hidden w-full max-w-lg mx-4 p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <CircleX />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
