import React from "react";
import "../../styles/home.scss";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

function Home({ columnOne, columnTwo, columnThree, columnFour }) {
  const paintingOrder = [columnOne, columnTwo, columnThree, columnFour];

  return (
    <div className="image-grid">
      {paintingOrder.map((column, index) => {
        return (
          <div key={index} className="column">
            {column.map((paintingId) => {
              return (
                <div key={data[paintingId].name} className="image-item">
                  <Link to={`/slideshow/${paintingId}`}>
                    <img
                      src={data[paintingId].images.thumbnail}
                      alt={data[paintingId].name}
                    />
                  </Link>
                  <div className="painting-info">
                    <p className="painting-name">{data[paintingId].name}</p>
                    <p className="artist-name">
                      {data[paintingId].artist.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default Home;
