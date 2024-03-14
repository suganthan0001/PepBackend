import React from "react";
import Topbar from "./Topbar";
import MoviesGrid from "./MoviesGrid";

function Home({mode,setMode}) {
  return (
    <>
      <Topbar mode={mode} setMode={setMode}/>
      HOME
    </>
  );
}

export default Home;
