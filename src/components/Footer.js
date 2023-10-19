import React from "react";
import "../styles/footer.scss";
import data from "../data/data.json";
import { useParams, Link } from "react-router-dom";

function Footer() {
  const { paintingId } = useParams();

  return (
    <div className="galleria-footer">
      <hr />
      <div className="painting-details">
        <div className="painting-name">{data[paintingId].name}</div>
        <div className="artist-name">{data[paintingId].artist.name}</div>
      </div>
      <div className="back-next-buttons">
        <Link to={`/slideshow/${paintingId > 0 ? +paintingId - 1 : 0}`}>
          <button className="back-button">
            <img
              src="../assets/shared/icon-back-button.svg"
              alt="back-button"
            />
          </button>
        </Link>
        <Link
          to={`/slideshow/${
            paintingId < data.length - 1 ? +paintingId + 1 : data.length - 1
          }`}
        >
          <button className="next-button">
            <img
              src="../assets/shared/icon-next-button.svg"
              alt="next button"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
