import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEquiment from "./Components/Equiment/AddEquiment";
import Baocao from "./Pages/Baocao";
import Dashboard from "./Pages/Dashboard";
import Service from "./Pages/Service";
import Equiment from "./Pages/Equiment";
import ForgotPassword from "./Pages/ForgotPassword";
import Info from "./Pages/Info";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import DetailEquiment from "./Components/Equiment/DetailEquiment";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ResetPassword" element={<ResetPassword />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Equiment" element={<Equiment />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/Baocao" element={<Baocao />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/AddEquiment" element={<AddEquiment />} />
      <Route path="/DetailEquiment" element={<DetailEquiment/>} />
    </Routes>
  );
};

export default Layout;
