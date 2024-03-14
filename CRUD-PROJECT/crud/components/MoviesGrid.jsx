import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function MoviesGrid() {
  const [data, setData] = useState([]);
  const [progress, setProgress] = React.useState(0);
  const [loader, setLoader] = useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function fetchData() {
    try {
      setProgress(20);
      const res = await fetch(
        "https://65f16ba2034bdbecc762729a.mockapi.io/movie"
      );
      const response = await res.json();
      console.log(response);
      setProgress(70);
      setData(response);
      setProgress(99);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      },1000)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movies">
      {loader && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      {data.map((movie, index) => (
        <Movie
          key={index}
          name={movie.name}
          poster={movie.poster}
          summary={movie.summary}
        />
      ))}
    </div>
  );
}

export default MoviesGrid;
