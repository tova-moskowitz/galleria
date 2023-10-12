import React from "react";
import data from "../data/data.json";
import "../styles/gallery.scss";

function gallerySingle({ pageNumber }) {
  const clickOpenModal = (e) => {
    console.log(e);
  };

  return (
    <div className="gallery-single-wrapper">
      <div className="main-content">
        <button onClick={clickOpenModal} className="modal-open">
          <img src={"/assets/shared/icon-view-image.svg"} />
          VIEW IMAGE
        </button>
        <div className="main-image">
          <img
            className="painting-image"
            src={data[pageNumber].images.hero.large}
            alt={data[pageNumber].name}
          />
        </div>
        <div className="title-and-artist-box">
          <div className="painting-title">{data[pageNumber].name}</div>
          <div className="artist-name">{data[pageNumber].artist.name}</div>
        </div>
        <img className="artist-image" src={data[pageNumber].artist.image} />
      </div>

      <div className="date-and-description-box">
        <div className="date">{data[pageNumber].year}</div>
        <div className="description">{data[pageNumber].description}</div>
        <a href={data[pageNumber].source} className="source">
          GO TO SOURCE
        </a>
      </div>
    </div>
  );
}
export default gallerySingle;
