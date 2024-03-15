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
import MovieDetail from "../components/MovieDetail";
import EditMovie from "../components/EditMovie";

function App() {

  const [mode,setMode] = useState(true);

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
        <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
          <Route path="add" element={<AddMovie />} />
          <Route path="login" element={<Login />} />
          <Route path="movies" element={<MoviesGrid />} />
          <Route path="view/:id" element={<MovieDetail />} />
          <Route path="edit/:id" element={<EditMovie />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
