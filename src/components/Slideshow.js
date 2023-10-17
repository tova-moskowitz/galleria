import React from "react";
import data from "../data/data.json";
import "../styles/gallery.scss";
import Footer from "./Footer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
function Slideshow({ pageNumber, clickBack, clickNext }) {
  const clickOpenModal = (e) => {};

  const { id } = useParams();
  console.log(id);

  return (
    <div data-page-number={id} className="gallery-single-wrapper">
      <div className="main-content">
        <button onClick={clickOpenModal} className="modal-open">
          <img src={"/assets/shared/icon-view-image.svg"} />
          VIEW IMAGE
        </button>
        <div className="images">
          <div className="painting-image">
            <img
              src={data[pageNumber].images.hero.large}
              alt={data[pageNumber].name}
            />
          </div>
        </div>

        <div className="title-and-artist-box">
          <div className="painting-title">{data[pageNumber].name}</div>
          <div className="artist-name">{data[pageNumber].artist.name}</div>
          <div className="artist-image">
            <img
              src={data[pageNumber].artist.image}
              alt={data[pageNumber].artist.name}
            />
          </div>
        </div>
      </div>

      <div className="date-and-description-box">
        <div className="date">{data[pageNumber].year}</div>
        <div className="description">{data[pageNumber].description}</div>
        <a href={data[pageNumber].source} className="source">
          GO TO SOURCE
        </a>
      </div>
      <Footer
        clickBack={clickBack}
        clickNext={clickNext}
        pageNumber={pageNumber}
      />
    </div>
  );
}
export default Slideshow;
