import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';

function LikeDislike() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);
  return (
    <div className="likeDislike">
      <IconButton
        aria-label="delete"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="success" max={999}>
          <ThumbUpIcon style={{ fontSize: "22px",paddingRight:"5px" }} />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => {
          if (like > 0) setDislike(dislike + 1);
        }}
      >
        <Badge badgeContent={dislike} color="error" max={999}>
          <ThumbDownIcon style={{ fontSize: "22px",paddingRight:"5px" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

export default LikeDislike;
