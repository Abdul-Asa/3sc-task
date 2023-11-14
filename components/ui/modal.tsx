import React, { ReactNode } from "react";
import StickyDrawer from "./sticky-drawer";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary-white w-full lg:max-w-[500px] shadow-strong lg:static fixed bottom-0 lg:bottom-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;
