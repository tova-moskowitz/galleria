import React, { useEffect } from "react";
import "../styles/modal.scss";

function Modal({ painting, setModalOpen }) {
  const closeModal = (e) => {
    if (e.key === "Escape") {
      setModalOpen(false);
    }
    console.log(e.key);
  };

  return (
    <div onKeyPress={closeModal} className="modal">
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
