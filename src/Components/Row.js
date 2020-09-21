import React, { useState, useEffect } from "react";
import axios from "../DataFetching/axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = ({ title, fetchUrl }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlData = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlData.get("v")); //to get the value of the query "v" in the youtube link
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie?.map((movie) => {
          return (
            <div
              className={`row__poster ${
                title === "Netflix Originals" && "row__posterLarge"
              }`}
              key={movie.id}
            >
              <abbr
                title={
                  movie?.name
                    ? `Click to View ${movie?.name || ""} Trailer`
                    : "Hover On Other Movie To see The Trailer"
                }
              >
                <img
                  onClick={() => handleClick(movie)}
                  src={`${baseImgUrl}${
                    title === "Netflix Originals"
                      ? movie.poster_path
                      : movie.backdrop_path
                  }`}
                  alt={`Click to View ${movie?.name} Trailer`}
                />
              </abbr>
            </div>
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
