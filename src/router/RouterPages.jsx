import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { LoginAdminPage } from "../pages/authentication/LoginAdminPage";
import ResetPasswordPage from "../pages/authentication/ResetPassword/ResetPasswordPage";
import ResetPasswordTautanPage from "../pages/authentication/ResetPassword/ResetPasswordTautanPage";

export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="loginAdmin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};
