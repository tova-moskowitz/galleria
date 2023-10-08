import React from "react";
import "./gallery.scss";
import data from "../../data/data.json";
import PaintingInfo from "../PaintingInfo";

function Gallery({ columnOne, columnTwo, columnThree, columnFour }) {
  return (
    <div className="image-grid">
      <PaintingInfo
        columnOne={columnOne}
        columnTwo={columnTwo}
        columnThree={columnThree}
        columnFour={columnFour}
      />
    </div>
  );
}
export default Gallery;
