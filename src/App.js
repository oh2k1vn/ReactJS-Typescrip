import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
// import MyAccount from "./pages/user/User";
import Login from "./pages/Login.jsx";
// import Respass from "./pages/login/ResetPass";
// import ResetPass from "./pages/login/Test";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        {/* <Route path='/1' element={<Respass />} />
        <Route path='/2' element={<ResetPass />} />
        <Route path='/3' element={<MyAccount/>} /> */}

        
    </Routes>
  );
}

export default App;
