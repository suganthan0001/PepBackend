import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

function LikeDislike({ response }) {
  async function addLike() {
    const modifiedLikes = {
      ...response,
      likes: `${+response.likes + 1}`
    };

    try {
      let res = await fetch(
        `https://65f16ba2034bdbecc762729a.mockapi.io/movie/${response.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifiedLikes),
        }
      );

      console.log("Added Likes successfully");
    } catch (e) {
      console.log(e);
    }
  }


  async function addDislike(){

    const modifiedDislikes = {
      ...response,
      dislikes: `${+response.dislikes + 1}`
    }


    try {
      const res = await fetch(
        `https://65f16ba2034bdbecc762729a.mockapi.io/movie/${response.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(modifiedDislikes),
        }
      );

      console.log("Added Dislikes successfully");
    } catch (error) {
      console.log(error);
    }
  }



  let [like, setLike] = useState(+response.likes);
  let [dislike, setDislike] = useState(+response.dislikes);
  return (
    <div className="likeDislike">
      <IconButton
        aria-label="addLike"
        onClick={() => {
          setLike(like + 1);
          addLike();
        }}
      >
        <Badge badgeContent={like} color="success" max={999}>
          <ThumbUpIcon style={{ fontSize: "22px", paddingRight: "5px" }} />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="addDislike"
        onClick={() => {
          if (like > 0) setDislike(dislike + 1);
          addDislike();
        }}
      >
        <Badge badgeContent={dislike} color="error" max={999}>
          <ThumbDownIcon style={{ fontSize: "22px", paddingRight: "5px" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

export default LikeDislike;
