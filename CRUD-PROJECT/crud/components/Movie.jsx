import React, { useState } from "react";
import kamal from "../src/assets/vikram.jpeg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LikeDislike from "./LikeDislike";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoIcon from "@mui/icons-material/Info";

function Movie() {
  const [show, setShow] = useState(true);

  return (
    <div className="movie-card">
      <img src={kamal} className="movie-img" alt="movie - poster" />
      <div className="movie-spec">
        <h2 className="movie-name">
          Vikram
          <IconButton
            aria-label="Toggle-Description"
            className="dropdown-icon"
            onClick={() => setShow(!show)}
          >
            {!show && <KeyboardArrowDownIcon />}
            {show && <KeyboardArrowUpIcon />}
          </IconButton>
          <IconButton>
            <InfoIcon className="info-icon"/>
          </IconButton>
        </h2>
        <h3 className="movie-rating">
          <StarRoundedIcon />
          <p style={{ display: "inline-block" }}>7.3</p>
        </h3>
      </div>

      {show && (
        <p className="movie-summary">
          A special agent investigates a murder committed by a masked group of
          serial killers. However, a tangled maze of clues soon leads him to the
          drug kingpin of Chennai.
        </p>
      )}

      <LikeDislike />
    </div>
  );
}

export default Movie;
