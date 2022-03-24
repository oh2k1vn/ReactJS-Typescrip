import React, { FC } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddEquiment from "./Pages/Equiment/AddEquiment";
import DetailEquiment from "./Pages/Equiment/DetailEquiment";
import Equiment from "./Pages/Equiment/Index";
import UpdateEquiment from "./Pages/Equiment/UpdateEquiment";
import DetailLevel from "./Pages/Level/DetailLevel";
import Level from "./Pages/Level/Index";
import InputLevel from "./Pages/Level/InputLevel";
import ForgotPassword from "./Pages/login/ForgotPassword";
import Login from "./Pages/login/Login";
import ResetPassword from "./Pages/login/ResetPassword";
import Report from "./Pages/Report";
import Service from "./Pages/Service/Index";
import Setting from "./Pages/Setting/Index";
import SilderBar from "./Pages/SilderBar";
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
        <Route path="Equiment" element={<Equiment />} />
        <Route path="Equiment/AddEquiment" element={<AddEquiment />} />
        <Route path="Equiment/DetailEquiment" element={<DetailEquiment />} />
        <Route path="Equiment/UpdateEquiment" element={<UpdateEquiment />} />
        <Route path="Service" element={<Service />} />
        <Route path="Level" element={<Level />} />
        <Route path="Level" element={<InputLevel />} />
        <Route path="Level" element={<DetailLevel />} />
        <Route path="Report" element={<Report />} />
        <Route path="Setting" element={<Setting />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
