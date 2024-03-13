import "./App.css";
import AddMovie from "../components/AddMovie";
import Register from "../components/Register";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Portal from "../components/Portal";
import PageNotFound from "../components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal />} >
          <Route path="add" element={<AddMovie />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
