import React from "react";
import "../styles/footer.scss";
import data from "../data/data.json";

function Footer({ clickBack, clickNext, pageNumber }) {
  return (
    <div className="galleria-footer">
      <hr />
      <div className="painting-details">
        <div className="painting-name">{data[pageNumber].name}</div>
        <div className="artist-name">{data[pageNumber].artist.name}</div>
      </div>
      <div className="back-next-buttons">
        <button
          onClick={clickBack}
          data-page={pageNumber}
          className="back-button"
        >
          <img src="./assets/shared/icon-back-button.svg" alt="back-button" />
        </button>
        <button
          onClick={clickNext}
          data-page={pageNumber}
          className="next-button"
        >
          <img src="./assets/shared/icon-next-button.svg" alt="next button" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
