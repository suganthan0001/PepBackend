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
import EditIcon from '@mui/icons-material/Edit';
// import { CardActionArea } from '@mui/material';
function Movie({response}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    // <Card className="movie-card">
    //   <CardMedia image={kamal} className="movie-img" alt="movie - poster" />
    //   <CardContent className="movie-spec">
    //     <h2 className="movie-name">
    //       Vikram
    //       <IconButton
    //         aria-label="Toggle-Description"
    //         className="dropdown-icon"
    //         onClick={() => setShow(!show)}
    //       >
    //         {!show && <KeyboardArrowDownIcon />}
    //         {show && <KeyboardArrowUpIcon />}
    //       </IconButton>
    //       <IconButton>
    //         <InfoIcon className="info-icon"/>
    //       </IconButton>
    //     </h2>
    //     <h3 className="movie-rating">
    //       <StarRoundedIcon />
    //       <p style={{ display: "inline-block" }}>7.3</p>
    //     </h3>
    //   </CardContent>

    //   {show && (
    //     <p className="movie-summary">
    //       A special agent investigates a murder committed by a masked group of
    //       serial killers. However, a tangled maze of clues soon leads him to the
    //       drug kingpin of Chennai.
    //     </p>
    //   )}
    //   <CardActions>
    //   <LikeDislike />
    //   </CardActions>
    // </Card>

    <Card sx={{ width: 300 ,marginBottom: "50px"}}>
      <CardMedia sx={{ height: 300 ,borderRadius:"10px"}} image={response.poster} title="green iguana" />
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
              <InfoIcon className="info-icon" onClick={() => navigate(`/portal/view/${response.id}`)}/>
            </IconButton>
            <span className="movie-rating">
                <StarRoundedIcon />
                <p style={{ display: "inline-block" }}>{response.rating}</p>
            </span>
          </h4>
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {show && (
            <p className="movie-summary">
              {response.summary}
            </p>
          )}
        </Typography>
      </CardContent>
      <CardActions style={{position:"relative"}}>
        <LikeDislike />
        <IconButton>
              <EditIcon onClick={() => navigate(`/portal/edit/${response.id}`)}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Movie;
