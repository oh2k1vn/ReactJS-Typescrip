import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import SilderBar from "./Pages/SilderBar";
import User from "./Pages/User";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import Equiment from "./Pages/Equiment";
import Dashboard from "./Pages/Dashboard";
import DetailEquiment from "./Pages/DetailEquiment";
import AddEquiment from "./Pages/AddEquiment";
import UpdateEquiment from "./Pages/UpdateEquiment";

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
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<User />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Equiment" element={<Equiment />} />
        <Route path="Equiment/AddEquiment" element={<AddEquiment />} />
        <Route path="Equiment/DetailEquiment" element={<DetailEquiment />} />
        <Route path="Equiment/UpdateEquiment" element={<UpdateEquiment/>}/>
      </Route>
    </Routes>
  );
};

export default App;
