import React from 'react'
import Row from "./component/Row";
import requests from "./requests";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";

function AppRouter() {
  return (
  <>
      <div className="App ">
        <Navbar/>
        <Banner/>
        <Row 
          title="Netflix originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="TopRated" fetchUrl={requests.fetchComedyMovies} />
        <Row title="ComedyMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="HorrorMovies" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
  </>
  )
}

export default AppRouter