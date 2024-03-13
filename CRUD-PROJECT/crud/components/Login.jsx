import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const registerValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="addForm Addmovie" onSubmit={formik.handleSubmit}>
      <h1>LOGIN</h1>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        className="input-field"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        type="password"
        className="input-field"
      />
      <Button variant="contained" type="submit">
        LOGIN
      </Button>
    </form>
  );
}

export default Login;
