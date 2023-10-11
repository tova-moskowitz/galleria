import React from "react";
import data from "../data/data.json";
import "../styles/gallery.scss";

function gallerySingle() {
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
            src={data[0].images.hero.large}
            alt={data[0].name}
          />
        </div>
        <div className="title-and-artist-box">
          <div className="painting-title">{data[0].name}</div>
          <div className="artist-name">{data[0].artist.name}</div>
        </div>
        <img className="artist-image" src={data[0].artist.image} />
      </div>

      <div className="date-and-description-box">
        <div className="date">{data[0].year}</div>
        <div className="description">{data[0].description}</div>
        <a href={data[0].source} className="source">
          GO TO SOURCE
        </a>
      </div>
    </div>
  );
}
export default gallerySingle;
