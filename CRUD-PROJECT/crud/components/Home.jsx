import React from "react";
import Topbar from "./Topbar";
import MoviesGrid from "./MoviesGrid";

function Home({mode,setMode}) {
  return (
    <>
      <Topbar mode={mode} setMode={setMode}/>
      <h1 style={{textAlign:"center"}}>HOME</h1>
    </>
  );
}

export default Home;
