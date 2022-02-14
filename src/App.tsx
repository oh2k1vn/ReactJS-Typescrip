import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import SilderBar from "./pages/SilderBar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Equiment from "./pages/Equiment";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import User from "./pages/User";

function Layout() {
  return (
    <div style={{ display: "flex", minHeight: '100vh', overflow: 'hidden' }}>
      <SilderBar/>
      <div style={{marginLeft:'24px', flex: '1'}}>
        <Outlet />
      </div>
    </div>
  );
}

function Demo() {
  return <h1>Hello</h1>
}

const App = () => {
  return (
  //   <Routes>
  //   <Route path="/" element={<Login/>}/>
  //   <Route path="/resetPassword" element={<ResetPassword/>}/>
  //   <Route path="/forgotPassword" element={<ForgotPassword/>}/>
  //   <Route path="/admin" element={<Layout />}>
  //     <Route index element={<User />} />
  //     <Route path="Demo" element={<Demo/>}/>
  //     <Route path="Dashboard" element={<Dashboard />} />
  //     <Route path="Equiment" element={<Equiment />} />
  //   </Route>
  // </Routes>
  );
};

export default App;
