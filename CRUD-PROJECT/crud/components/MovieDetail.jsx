import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
function MovieDetail() {

const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  async function getMovie() {
    const res = await fetch(
      `https://65f16ba2034bdbecc762729a.mockapi.io/movie/${id}`
    );
    const response = await res.json();
    console.log(response);
    setMovie(response);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <iframe
        // width="960"
        // height="540"
        className="yt-video"
        src={movie.trailer}
        title="Movie Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="movie-card" style={{marginLeft:"auto", marginRight:"auto"}}>
        <div className="movie-spec">
            <h2 className="movie-name">{movie.name}</h2>
            <h3 className="movie-rating" style={{color: movie.rating>=8.5?"green":"red"}}>
                {movie.rating}
            </h3>
        </div>
            <p className="movie-summary">{movie.summary}</p>

      <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={() => navigate('/portal/movies')}>BACK</Button>
      </div>
    </>
  );
}

export default MovieDetail;
