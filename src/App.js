import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import ForgotPassword from "./components/login/forgotPassword.jsx";
import Login from "./components/login/login.jsx";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/1' element={<ForgotPassword />} />

        
    </Routes>
  );
}

export default App;
