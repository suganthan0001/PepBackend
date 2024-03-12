import "./App.css";
import AddMovie from "../components/AddMovie";
import Register from "../components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
