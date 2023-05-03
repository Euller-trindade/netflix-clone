import React, { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "./styles.css";

const MovieRow = ({ items, title }) => {
  const [scrollx, setScrollx] = useState(0);
  const [trailerURL, setTrailerURL] = useState("");
  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };
  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listw = items.results.length * 150;
    if (window.innerWidth - listw > x) {
      x = window.innerWidth - listw - 60;
    }
    setScrollx(x);
  };
  const handleOnClick = (item) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(item.title || item.name || item.original_name || "")
        .then((url) => {
          setTrailerURL(url);
        })
        .then(setTrailerURL(""))
        .catch((error) => console.log("Erro fetching movie trailer: " + error));
    }
  };
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listArea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollx,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                {" "}
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  onClick={() => handleOnClick(item)}
                />{" "}
              </div>
            ))}
        </div>
        {trailerURL && (
          <ReactPlayer
            className="trailer"
            url={trailerURL}
            playing={true}
            width="100%"
            height="90vh"
            controls={true}
          />
        )}
        {trailerURL === null && alert("Trailer não disponivel")}
      </div>
    </div>
  );
};

export default MovieRow;
