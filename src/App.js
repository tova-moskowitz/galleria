import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import "./index.css";
import "./App.scss";
import Home from "./components/home/Home.js";
import Header from "./components/Header.js";
import Slideshow from "./components/Slideshow.js";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  // const columns = [0, 4, 8, 11, 1, 5, 9, 12, 2, 6, 13, 3, 7, 10, 14];
  const columnOne = [
    { order: 0, pageNum: 1 },
    { order: 4, pageNum: 5 },
    { order: 8, pageNum: 9 },
    { order: 11, pageNum: 12 },
  ];
  const columnTwo = [
    { order: 1, pageNum: 2 },
    { order: 5, pageNum: 6 },
    { order: 9, pageNum: 10 },
    { order: 12, pageNum: 13 },
  ];
  const columnThree = [
    { order: 2, pageNum: 3 },
    { order: 6, pageNum: 7 },
    { order: 13, pageNum: 14 },
  ];
  const columnFour = [
    { order: 3, pageNum: 4 },
    { order: 7, pageNum: 8 },
    { order: 10, pageNum: 11 },
    { order: 14, pageNum: 15 },
  ];

  const clickNext = (e) => {
    pageNumber < columnFour.length - 1 &&
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
              // columns={columns}
              columnOne={columnOne}
              columnTwo={columnTwo}
              columnThree={columnThree}
              columnFour={columnFour}
              pageNumber={pageNumber}
            />
          }
        />
        <Route
          path="/slideshow/:id"
          element={
            <Slideshow
              pageNumber={pageNumber}
              clickBack={clickBack}
              clickNext={clickNext}
            />
          }
        />
        {console.log(pageNumber)}
      </Routes>
    </div>
  );
}

export default App;
