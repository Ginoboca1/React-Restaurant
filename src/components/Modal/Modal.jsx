import "./modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({ setShowModal, message }) => {
  return (
    <div className="container">
      <div className="modal-container">
        <AiOutlineCloseCircle
          className="icon"
          onClick={() => setShowModal(false)}
        />
        <p className="message">{message}</p>
        <button
          className="button button-accept"
          onClick={() => setShowModal(false)}
        >
          accept
        </button>
      </div>
    </div>
  );
};
