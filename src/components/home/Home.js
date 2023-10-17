import React, { useState } from "react";
import "../../styles/home.scss";
import data from "../../data/data.json";
import { BrowserRouter as useParams, Link } from "react-router-dom";

function Home({ columnOne, columnTwo, columnThree, columnFour, pageNumber }) {
  const [paintingId, setPaintingId] = useState(1);
  const paintingOrder = [columnOne, columnTwo, columnThree, columnFour];

  const onClick = (e) => {
    console.log(e.target.dataset.pageNumber);
    setPaintingId(e.target.dataset.pageNumber);
  };

  return (
    <div className="image-grid">
      {paintingOrder.map((column, index) => {
        return (
          <div key={index} className="column">
            {column.map((painting) => {
              console.log(painting.order, painting.pageNum);
              return (
                <div key={data[painting.order].name} className="image-item">
                  <Link to={`/slideshow/${painting.pageNum}`}>
                    <img
                      onClick={onClick}
                      src={data[painting.order].images.thumbnail}
                      alt={data[painting.order].name}
                      data-painting-id={painting.pageNum}
                    />
                  </Link>
                  <div className="painting-info">
                    <p className="painting-name">{data[painting.order].name}</p>
                    <p className="artist-name">
                      {data[painting.order].artist.name}
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
