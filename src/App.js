import React, { useState } from "react";
import "./App.scss";
import Home from "./components/home/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import GallerySingle from "./components/GallerySingle.js";

function App() {
  const [page, setPage] = useState("gallery");
  const [pageNumber, setPageNumber] = useState(0);
  const columnOne = [0, 4, 8, 11];
  const columnTwo = [1, 5, 9, 12];
  const columnThree = [2, 6, 13];
  const columnFour = [3, 7, 10, 14];

  const clickNext = (e) => {
    pageNumber < columnFour[columnFour.length - 1] &&
      setPageNumber((pageNumber) => pageNumber + 1);
  };

  const clickBack = (e) => {
    pageNumber > 0 && setPageNumber((pageNumber) => pageNumber - 1);
  };

  return (
    <div className="wrapper">
      <Header />
      {/*  */}
      {page === "home" && (
        <Home
          columnOne={columnOne}
          columnTwo={columnTwo}
          columnThree={columnThree}
          columnFour={columnFour}
        />
      )}
      {page === "gallery" && (
        <>
          <GallerySingle pageNumber={pageNumber} />
          <Footer
            clickBack={clickBack}
            clickNext={clickNext}
            pageNumber={pageNumber}
          />
        </>
      )}
    </div>
  );
}

export default App;
