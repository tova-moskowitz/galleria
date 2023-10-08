import React from "react";
import "./App.scss";
import Gallery from "./components/Gallery/Gallery.js";

function App() {
  const columnOne = [
    "starry-night",
    "the-storm-on-the-sea-of-galilee",
    "lady-with-an-ermine",
    "the-boy-in-the-red-vest",
  ];
  const columnTwo = [
    "girl-with-pearl-earring",
    "the-great-wave-off-kanagawa",
    "the-night-cafe",
    "arnolfini-portrait",
  ];
  const columnThree = ["guernica", "van-gogh-self-portrait", "mona-lisa"];
  const columnFour = [
    "penitent-magdalene",
    "the-sleeping-gypsy",
    "the-basket-of-apples",
    "the-swing",
  ];
  // Add more image names in the desired order

  return (
    <div className="wrapper">
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
