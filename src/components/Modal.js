import React, { useEffect } from "react";
import "../styles/modal.scss";

function Modal({ painting, setModalOpen }) {
  return (
    <div className="modal">
      <button
        onClick={() => {
          setModalOpen(false);
        }}
        className="closeModalBtn"
      >
        CLOSE
      </button>
      <img src={`../${painting.images.gallery}`} alt="" />
    </div>
  );
}

export default Modal;
