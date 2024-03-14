import React, { useEffect, useState } from "react";
import Movie from "./Movie";
function MoviesGrid() {
  const [data, setData] = useState([]);

  async function get() {
    try {
      const res = await fetch(
        "https://65f16ba2034bdbecc762729a.mockapi.io/movie"
      );
      const response = await res.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    get();
  }, []);

  return (
    <div className="movies">
      {data.map((each, index) => {
        return (
          <>
              <Movie
                name={each.name}
                key={index}
                poster={each.poster}
                summary={each.summary}
              />
          </>
        );
      })}
    </div>
  );
}

export default MoviesGrid;
