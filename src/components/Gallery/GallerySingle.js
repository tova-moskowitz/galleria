import React from "react";
import data from "../../data/data.json";
import "../../styles/gallery.scss";

function gallerySingle() {
  return (
    <div className="single">
      <div className="main-content">
        <img className="painting-image" src={data[9].images.hero.large} />
        <div className="title-and-artist-box">
          <div className="painting-title">{data[9].name}</div>
          <div className="artist-name">{data[9].artist.name}</div>
        </div>
        <div className="date">{data[9].year}</div>
        <div className="description">{data[9].description}</div>
        <img className="artist-image" src={data[9].artist.image} />
      </div>
    </div>
  );
}
export default gallerySingle;
