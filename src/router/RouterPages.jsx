import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { LoginAdminPage } from "../pages/authentication/LoginAdminPage";
import ResetPasswordPage from "../pages/authentication/ResetPassword/ResetPasswordPage";
import ResetPasswordTautanPage from "../pages/authentication/ResetPassword/ResetPasswordTautanPage";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { KelolaKelas } from "../pages/admin/KelolaKelas";
import { NotFoundPage } from "../pages/NotFoundPage";
import { DetailsKelolaKelas } from "../pages/DetailsKelolaKelas";
import { Chapters } from "../pages/Chapters";


export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin/dashboard" element={<AdminDashboard/>} />
        <Route path="admin/kelola-kelas" element={<KelolaKelas/>} />
        <Route path="admin/kelola-kelas/:id" element={<DetailsKelolaKelas/>} />



        <Route path="test/:id" element={<Chapters/>} />
        <Route path="*" element={<NotFoundPage/>} />


        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};
