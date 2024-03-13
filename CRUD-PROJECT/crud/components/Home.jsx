import React from "react";
import Movie from "./Movie";
import Topbar from "./Topbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="home">
        <Movie />
      </div>
    </>
  );
}

export default Home;
