import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.scss";
import Home from "./components/home/Home.js";
import Header from "./components/Header.js";
import Slideshow from "./components/Slideshow.js";

function App() {
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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              columnOne={columnOne}
              columnTwo={columnTwo}
              columnThree={columnThree}
              columnFour={columnFour}
            />
          }
        />
        <Route
          path="/slideshow"
          element={
            <Slideshow
              clickBack={clickBack}
              clickNext={clickNext}
              pageNumber={pageNumber}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
