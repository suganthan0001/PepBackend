import React, { useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={300}/>;
});

function Movie({ response , fetchData}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  async function deleteMovie() {
    try {
      const res = await fetch(
        `https://65f16ba2034bdbecc762729a.mockapi.io/movie/${response.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("DELETION SUCCESS");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{`Are you sure you want delete ${response.name}?`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Remember, once it's gone, it's gone! No take-backsies.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Nah, let's keep it...</Button>
            <Button
              onClick={() => {
                deleteMovie();
                handleClose();
              }}
              style={{ color: "red" }}
            >
              Yeah, Delete it!!
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

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
          <LikeDislike response={response} />
          <IconButton>
            <EditIcon onClick={() => navigate(`/portal/edit/${response.id}`)} />
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={() => handleClickOpen()} />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Movie;
