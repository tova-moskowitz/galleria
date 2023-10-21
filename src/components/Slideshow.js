import React from "react";
import data from "../data/data.json";
import "../styles/gallery.scss";
import Footer from "./Footer.js";
import { useParams } from "react-router-dom";
function Slideshow() {
  const clickOpenModal = (e) => {};
  const { paintingId } = useParams();
  const painting = data.find((painting) => painting.id === +paintingId);

  return (
    <>
      <div className="gallery-single-wrapper">
        <div className="main-content">
          <button onClick={clickOpenModal} className="modal-open">
            <img src={"./assets/shared/icon-view-image.svg"} />
            VIEW IMAGE
          </button>
          <div className="images">
            <div className="painting-image">
              <img src="./assets/starry-night/gallery.jpg" />
            </div>
          </div>
          <div className="title-and-artist-box">
            <div className="painting-title">{painting.name}</div>
            <div className="artist-name">{painting.artist.name}</div>
            <div className="artist-image">
              <img src={`.${painting.artist.image}`} />
            </div>
          </div>
        </div>

        <div className="date-and-description-box">
          <div className="date">{painting.year}</div>
          <div className="description">{painting.description}</div>
          <a href={painting.source} className="source">
            GO TO SOURCE
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Slideshow;
