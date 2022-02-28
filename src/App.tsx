import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import React, { FC, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AddEquiment from "./Pages/AddEquiment";
import Dashboard from "./Pages/Dashboard";
import DetailEquiment from "./Pages/DetailEquiment";
import Equiment from "./Pages/Equiment";
import ForgotPassword from "./Pages/ForgotPassword";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import SilderBar from "./Pages/SilderBar";
import UpdateEquiment from "./Pages/UpdateEquiment";
import User from "./Pages/User";





function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
      <SilderBar />
      <div style={{ marginLeft: "24px", flex: "1" }}>
        <Outlet />
      </div>
    </div>
  );
}

function Error() {
  return (
    <>
      <h1>404 - ERROR</h1>
    </>
  );
}
const App: FC = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<User />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Equiment" element={<Equiment />}></Route>
        <Route path="Equiment/AddEquiment" element={<AddEquiment />} />
        <Route path="Equiment/DetailEquiment" element={<DetailEquiment />} />
        <Route path="Equiment/UpdateEquiment" element={<UpdateEquiment />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
