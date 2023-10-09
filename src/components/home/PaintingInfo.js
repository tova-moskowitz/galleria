import React from "react";
import data from "../../data/data.json";

function PaintingInfo({ columnOne, columnTwo, columnThree, columnFour }) {
  const paintingOrder = [columnOne, columnTwo, columnThree, columnFour];

  return paintingOrder.map((column, index) => {
    return (
      <div key={index} className="column">
        {column.map((painting, index) => {
          return (
            <div key={index} className="image-item">
              <img
                src={data[painting].images.thumbnail}
                alt={data[painting].name}
              />
              <div className="painting-info">
                <p className="painting-name">{data[painting].name}</p>
                <p className="artist-name">{data[painting].artist.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  });
}

export default PaintingInfo;
