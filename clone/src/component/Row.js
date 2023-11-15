import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import axios from "../axios";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(props.fetchUrl);
      // with get   // https://api.themoviedb.org/3/fetchNetflixOriginals with appjs
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [props.fetchUrl]);
  console.table(movies);

  const [trailer, setTrailer] = useState("");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailer(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="row pt-3">
        <h2 className="ms-3 ">{props.title}</h2>
        <div className="row_posters pt-2 ms-2 ">
          {movies.map((movie) => (
            <img
              className={`row_poster ms-2  ${props.isLargeRow && "large_row"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
    </>
  );
}

export default Row;
