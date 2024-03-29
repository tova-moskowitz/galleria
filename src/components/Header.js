import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

function Header({ currentUrl }) {
  const [currentLink, setCurrentLink] = useState(window.location.hash);

  const startSlideshow = (e) => {
    setCurrentLink("/slideshow/0");
  };

  const stopSlideshow = (e) => {
    setCurrentLink("/");
  };

  useEffect(() => {
    if (currentUrl === "/") {
      setCurrentLink("/");
    }
  }, []);

  return (
    <>
      <div className="galleria-header">
        <img src="./assets/shared/logo.svg" />
        {currentLink === "/" && (
          <Link to={"/slideshow/0"}>
            <div onClick={startSlideshow} className="start-slideshow">
              Start Slideshow
            </div>
          </Link>
        )}
        {currentLink !== "/" && (
          <Link to={"/"}>
            <div onClick={stopSlideshow} className="stop-slideshow">
              Stop Slideshow
            </div>
          </Link>
        )}
      </div>
      <hr />
    </>
  );
}

export default Header;
