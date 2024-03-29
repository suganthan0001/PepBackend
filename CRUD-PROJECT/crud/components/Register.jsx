import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import * as yup from "yup";

function Register() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("This is a success message!", { variant });
  };

  const registerValidationSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleClickVariant("success")();
    },
  });

  return (
    <form className="addForm Addmovie" onSubmit={formik.handleSubmit}>
      <h1>Register</h1>
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && formik.errors.username}
        helperText={
          formik.touched.username && formik.errors.username
            ? formik.errors.username
            : null
        }
        className="input-field"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email
            ? formik.errors.email
            : null
        }
        className="input-field"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : null
        }
        className="input-field"
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
            ? formik.errors.confirmPassword
            : null
        }
        className="input-field"
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
}

export default Register;
