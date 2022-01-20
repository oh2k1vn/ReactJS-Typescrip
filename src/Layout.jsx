import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Dashboard from './Pages/Dashboard';
import Info from './Pages/Info';
import ResetPassword from './Pages/ResetPassword';
import Baocao from './Pages/Baocao';
import Dichvu from './Pages/Dichvu';
import Thietbi from './Pages/Thietbi';


const Layout = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/ResetPassword" element={<ResetPassword/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Info" element={<Info/>}/>
      <Route path="/Baocao" element={<Baocao/>}/>
      <Route path="/Dichvu" element={<Dichvu/>}/>
      <Route path="/Thietbi" element={<Thietbi/>}/>
    </Routes>
    );
};

export default Layout;
