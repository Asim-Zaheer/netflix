import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
          backgroundPosition: "center center",
          // height:"35rem"
        }}
      >
        <div className="banner_content ms-3  h-2 ">
          <h1 className="banner_title ms-4">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_btns py-3  ">
            <button className="banner_btn mx-3 py-2">Play</button>
            <button className="banner_btn ms-2 py-2">My List</button>
          </div>
          <h3 className="banner_des ms-4 ">
            {" "}
            {truncate(movie?.overview, 220)}{" "}
          </h3>
        </div>
         <div className="banner--fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
