import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from '@mui/icons-material/DarkMode';
function Topbar({mode,setMode}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/portal/movies");
            }}
          >
            Movies
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/portal/add");
            }}
          >
            Add Movie
          </Button>
          <Button
            color="inherit"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/portal/login");
            }}
          >
            Login
          </Button>
          <IconButton aria-label="light and dark mode" onClick={() => {setMode(!mode)}}>
              {!mode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;
