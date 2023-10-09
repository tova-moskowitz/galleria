import React from "react";
import "./App.scss";
import Gallery from "./components/Gallery/Gallery.js";
import Header from "./components/Header.js";

function App() {
  const columnOne = [0, 4, 8, 11];
  const columnTwo = [1, 5, 9, 12];
  const columnThree = [2, 6, 13];
  const columnFour = [3, 7, 10, 14];

  // Add more image names in the desired order

  return (
    <div className="wrapper">
      <Header />
      <Gallery
        columnOne={columnOne}
        columnTwo={columnTwo}
        columnThree={columnThree}
        columnFour={columnFour}
      />
    </div>
  );
}

export default App;
