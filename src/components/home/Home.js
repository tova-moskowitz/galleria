import React from "react";
import "../../styles/home.scss";
import PaintingInfo from "./PaintingInfo";

function Home({ columnOne, columnTwo, columnThree, columnFour }) {
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
export default Home;
