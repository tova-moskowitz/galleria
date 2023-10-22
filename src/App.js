import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.scss";
import Home from "./components/home/Home.js";
import Header from "./components/Header.js";
import Slideshow from "./components/Slideshow.js";

// TODO:
// next and back buttons are weird on tablet and mobile
// close modal on escape (??)
// Go To Source link jumps around from page to page
// home- gradient on hover over painting
// <Outlet /> (?)
// use history to go back to home instead of back in slideshow, if have time

function App() {
  const columnOne = [0, 4, 8, 11];
  const columnTwo = [1, 5, 9, 12];
  const columnThree = [2, 6, 13];
  const columnFour = [3, 7, 10, 14];

  return (
    <div className="wrapper">
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
        <Route path="/slideshow/:paintingId" element={<Slideshow />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
