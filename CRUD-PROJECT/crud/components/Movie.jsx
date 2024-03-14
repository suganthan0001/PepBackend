import React, { useState } from "react";
import kamal from "../src/assets/vikram.jpeg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LikeDislike from "./LikeDislike";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import { CardActionArea } from '@mui/material';
function Movie({ response }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  async function deleteMovie() {
    try {
      const res = await fetch(`https://65f16ba2034bdbecc762729a.mockapi.io/movie/${response.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("DELETION SUCCESS");
      navigate(`/portal/movies/`);
    } catch (e) {
      console.log(e);
    }
  }


  // async function deleteMovie() {
  //   try {
  //     const res = await fetch(`https://65f16ba2034bdbecc762729a.mockapi.io/movie/${response.id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Add any necessary authentication headers if required
  //       },
  //     });
  
  //     if (res.ok) {
  //       // Movie successfully deleted, you can perform any necessary actions here
  //       console.log('Movie deleted successfully');
  //       // For example, you can navigate to another page after deletion
  //       navigate('/portal'); // Navigate to the portal page or any other page
  //     } else {
  //       // Handle error responses
  //       console.error('Failed to delete movie:', res.statusText);
  //       // You can also show a notification or handle the error in some other way
  //     }
  //   } catch (error) {
  //     // Handle network errors or any other unexpected errors
  //     console.error('Error deleting movie:', error);
  //   }
  // }

  return (
    <Card sx={{ width: 300, marginBottom: "50px" }}>
      <CardMedia
        sx={{ height: 300, borderRadius: "10px" }}
        image={response.poster}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h4 className="movie-name">
            {response.name}
            <IconButton
              aria-label="Toggle-Description"
              className="dropdown-icon"
              onClick={() => setShow(!show)}
            >
              {!show && <KeyboardArrowDownIcon />}
              {show && <KeyboardArrowUpIcon />}
            </IconButton>
            <IconButton>
              <InfoIcon
                className="info-icon"
                onClick={() => navigate(`/portal/view/${response.id}`)}
              />
            </IconButton>
            <span className="movie-rating">
              <StarRoundedIcon />
              <p style={{ display: "inline-block" }}>{response.rating}</p>
            </span>
          </h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {show && <p className="movie-summary">{response.summary}</p>}
        </Typography>
      </CardContent>
      <CardActions style={{ position: "relative" }}>
        <LikeDislike />
        <IconButton>
          <EditIcon onClick={() => navigate(`/portal/edit/${response.id}`)} />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={() => deleteMovie()} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Movie;
