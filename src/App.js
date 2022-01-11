import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/login/page/login";
import Respass from "./components/login/page/repass";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/respass' element={<Respass />} />
    </Routes>
  );
}

export default App;
