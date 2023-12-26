import { FC, ReactElement } from "react";

interface ModalProps {
  hiddenModal: boolean;
  handlerModal: (e: React.MouseEvent) => void;
  children: ReactElement;
}
const Modal: FC<ModalProps> = ({ hiddenModal, handlerModal, children }) => {
  return (
    <div
      className="modal"
      style={hiddenModal ? { display: "none" } : { display: "block" }}
      onClick={(e) => {
        handlerModal(e);
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
