import Reac, { useState } from "react";
import "../styles/footer.scss";
import data from "../data/data.json";
import { useParams, Link } from "react-router-dom";

function Footer() {
  const [disableBack, setDisableBack] = useState("");
  const [disableNext, setDisableNext] = useState("");
  const { paintingId } = useParams();

  const onClickBack = () => {
    if (+paintingId === 1) {
      setDisableBack("disabled");
    }
    setDisableNext("");
  };

  const onClickNext = () => {
    if (+paintingId === data.length - 2) {
      setDisableNext("disabled");
    }
    setDisableBack("");
  };

  return (
    <div className="galleria-footer">
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
            <img
              src="../assets/shared/icon-back-button.svg"
              alt="back-button"
            />
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
            <img
              src="../assets/shared/icon-next-button.svg"
              alt="next button"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
