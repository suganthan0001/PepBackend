import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import * as yup from "yup";

function AddMovie() {
  const movieValidateSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required().min(10).url(),
    trailer: yup.string().required().min(10).url(),
    rating: yup.number().required().min(0).max(10),
    summary: yup.string().required().min(20),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      trailer: "",
      rating: "",
      summary: "",
    },
    validationSchema: movieValidateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="Addmovie addForm" onSubmit={formik.handleSubmit}>
      <h1>Add Movie</h1>
      <TextField
        id="outlined-basic"
        label="Enter Movie Name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name:null}
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
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster:null}
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
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer:null}
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
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating:null}
      />
      <TextField
        id="outlined-basic"summary
        label="Enter Summary Name"
        variant="outlined"
        value={formik.values.summary}
        onChange={formik.handleChange}
        name="summary"
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary:null}
      />

      <Button variant="contained" endIcon={<AddIcon />} type="submit">
        ADD
      </Button>
    </form>
  );
}

export default AddMovie;
