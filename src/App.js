import React, { useState } from "react";
import "./App.scss";
import Home from "./components/home/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import GallerySingle from "./components/GallerySingle.js";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const columnOne = [0, 4, 8, 11];
  const columnTwo = [1, 5, 9, 12];
  const columnThree = [2, 6, 13];
  const columnFour = [3, 7, 10, 14];

  const clickNext = (e) => {
    // console.log(e.currentTarget.getAttribute("data-page"));
    pageNumber < columnFour[columnFour.length - 1] &&
      setPageNumber((pageNumber) => pageNumber + 1);
  };

  const clickBack = (e) => {
    pageNumber > 0 && setPageNumber((pageNumber) => pageNumber - 1);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <GallerySingle pageNumber={pageNumber} />
        {/* <Home
        columnOne={columnOne}
        columnTwo={columnTwo}
        columnThree={columnThree}
        columnFour={columnFour}
      /> */}
        <Footer
          clickBack={clickBack}
          clickNext={clickNext}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

export default App;
