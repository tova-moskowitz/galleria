import React from "react";
import "../styles/footer.scss";
import data from "../data/data.json";

function Footer({}) {
  return (
    <div className="galleria-footer">
      <hr />
      <div className="painting-details">
        <div className="painting-name">{data[0].name}</div>
        <div className="artist-name">{data[0].artist.name}</div>
      </div>
      <div className="back-next-buttons">
        <button className="back-button">
          <img src="./assets/shared/icon-back-button.svg" alt="back-button" />
        </button>
        <button className="next-button">
          <img src="./assets/shared/icon-next-button.svg" alt="next button" />
        </button>
      </div>
      {/* <div>Start Slideshow</div> */}
    </div>
  );
}

export default Footer;
