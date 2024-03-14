import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "./SuccessMessage";




function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  

  async function get() {
    try {
      const movie1 = await fetch(
        `https://65f16ba2034bdbecc762729a.mockapi.io/movie/${id}`
      );
      const res = await movie1.json();

      setMovie(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <>
        {movie != undefined ? <EditForm movie={movie}/>:"Loading..."}
    {/* <SuccessMessage/> */}
    </>
  )
}

function EditForm({movie}) {
  const navigate = useNavigate();

  async function updateMovie(movie,old){
    try{
      const res = await fetch(`https://65f16ba2034bdbecc762729a.mockapi.io/movie/${old.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
      const response = await res.json();
      console.log(response);
      navigate('/portal/movies');
    }catch(e){
      console.log(e)
    }
  }
  

  const movieValidateSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
  });
  
  
  const formik = useFormik({
    initialValues: {
      name: movie.name,
      poster: movie.poster,
      trailer: movie.trailer,
      rating: movie.rating,
      summary: movie.summary,
    },
    validationSchema: movieValidateSchema,
    onSubmit: (newMovie) => {
      updateMovie(newMovie,movie);
    },
  });
  return (
    <form className="Addmovie addForm" onSubmit={formik.handleSubmit}>
      <h1>Edit Movie</h1>
      <TextField
        id="outlined-basic"
        label="Enter Movie Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Enter Poster URL"
        variant="outlined"
        value={formik.values.poster}
        onChange={formik.handleChange}
        name="poster"
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Enter Trailer Name"
        variant="outlined"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        name="trailer"
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : null
        }
      />
      <TextField
        id="outlined-basic"
        label="Enter Rating Name"
        variant="outlined"
        value={formik.values.rating}
        onChange={formik.handleChange}
        name="rating"
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : null
        }
      />
      <TextField
        id="outlined-basic"
        summary
        label="Enter Summary Name"
        variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : null
        }
      />

      <Button variant="contained" endIcon={<AddIcon />} type="submit">
        UPDATE
      </Button>
    </form>
  )
}

export default EditMovie;
