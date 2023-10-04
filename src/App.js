import React from "react";
import "./App.css";
import data from "../src/data/data.json";

function App() {
  const outputHomepage = () => {
    return data.map((painting) => {
      return <img src={painting.images.thumbnail} alt={painting.name} />;
    });
  };

  return <div className="wrapper">{outputHomepage()}</div>;
}

export default App;
