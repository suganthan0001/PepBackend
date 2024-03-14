import "./App.css";
import AddMovie from "../components/AddMovie";
import Register from "../components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Portal from "../components/Portal";
import PageNotFound from "../components/PageNotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import MoviesGrid from "../components/MoviesGrid";

function App() {

  const [mode,setMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark":"light",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="add" element={<AddMovie />} />
          <Route path="login" element={<Login />} />
          <Route path="movies" element={<MoviesGrid />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
