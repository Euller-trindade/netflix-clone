import React from "react";
import "./styles.css";
import InfoIcon from "@mui/icons-material/Info";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

const FeaturedMovie = ({ item }) => {
  let firtsDate = new Date(item.first_air_date);

  let description = item.overview;

  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--year">{firtsDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} Temporada
              {item.number_of_seasons !== 1 ? "s" : ""}{" "}
            </div>
            <div className="featured--description">{description}</div>
            <div className="featured--buttons">
              <Link
                to="/home"
                className="featured--watchbutton"
                onClick={() =>
                  alert(
                    "Trailer indispensável. Por favor tente outro item. 😉👍"
                  )
                }
              >
                <PlayArrowIcon /> Assistir
              </Link>
              <Link to="/home" className="featured--mylistbutton">
                <InfoIcon /> Mais informações
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
