import React, { useState, useEffect } from "react";
import "../styles/footer.scss";
import data from "../data/data.json";
import { useParams, Link } from "react-router-dom";

function Footer() {
  const [progress, setProgress] = useState(0);
  const [disableBack, setDisableBack] = useState("");
  const [disableNext, setDisableNext] = useState("");
  const { paintingId } = useParams();

  const onClickBack = () => {
    if (progress > 7) {
      setProgress((progress) => progress - 7.15);
    }
    if (+paintingId === 1) {
      setDisableBack("disabled");
    }
    setDisableNext("");
  };

  const onClickNext = () => {
    if (progress < 100) {
      setProgress((progress) => progress + 7.15);
    }
    if (+paintingId === data.length - 2) {
      setDisableNext("disabled");
    }
    setDisableBack("");
  };

  useEffect(() => {
    setProgress(+paintingId * 7.15);
    if (+paintingId === 0) {
      setDisableBack("disabled");
    }

    if (+paintingId === data.length - 1) {
      setDisableNext("disabled");
    }
  }, []);

  return (
    <div className="galleria-footer">
      <div className="progress-bar" style={{ width: progress + "%" }}></div>
      <hr />
      <div className="painting-details">
        <div className="painting-name">{data[paintingId].name}</div>
        <div className="artist-name">{data[paintingId].artist.name}</div>
      </div>
      <div className="back-next-buttons">
        <Link
          to={`/slideshow/${paintingId > 0 ? +paintingId - 1 : paintingId}`}
        >
          <button
            onClick={onClickBack}
            disabled={disableBack}
            className="back-button"
          >
            <img src="/assets/shared/icon-back-button.svg" alt="back-button" />
          </button>
        </Link>
        <Link
          to={`/slideshow/${
            paintingId < data.length - 1 ? +paintingId + 1 : paintingId
          }`}
        >
          <button
            onClick={onClickNext}
            disabled={disableNext}
            className="next-button"
          >
            <img src="/assets/shared/icon-next-button.svg" alt="next button" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
