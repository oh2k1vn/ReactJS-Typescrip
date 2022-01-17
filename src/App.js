import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import ForgotPassword from "./components/login/forgotPassword.jsx";
import Login from "./components/login/Login.jsx";
import MyAccount from "./components/user/myAccount.jsx";
// import Web from "./pages/Web.jsx";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/1' element={<ForgotPassword />} />
        <Route path='/2' element={<MyAccount/>} />
        {/* <Route path='/MyAccount/:type' element={<Web />} /> */}
    </Routes>
  );
}

export default App;
