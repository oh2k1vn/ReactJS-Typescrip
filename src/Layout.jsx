import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddEquiment from "./Pages/Equiment/AddEquiment";
import DetailEquiment from "./Pages/Equiment/DetailEquiment";
import Equiment from "./Pages/Equiment/Equiment";
import ForgotPassword from "./Pages/ForgotPassword";
import Info from "./Pages/Info";
import Level from "./Pages/Level/Level";
import Login from "./Pages/Login";
import { default as Baocao, default as Report } from "./Pages/Report/Report";
import ResetPassword from "./Pages/ResetPassword";
import AddService from "./Pages/Service/AddService";
import DetailService from "./Pages/Service/DetailService";
import Service from "./Pages/Service/Service";

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
      <Route path="/AddService" element={<AddService />} />
      <Route path="/AddEquiment" element={<AddEquiment />} />
      <Route path="/DetailEquiment" element={<DetailEquiment />} />
      <Route path="/DetailService" element={<DetailService />} />
      <Route path="/Level" element={<Level />} />
      <Route path="/Report" element={<Report />} />


      <Route path="*" element={"404"} />
    </Routes>
  );
};

export default Layout;
