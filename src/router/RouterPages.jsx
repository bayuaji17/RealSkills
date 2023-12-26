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
import DetailKelasPage from "../pages/ClassDetail/DetailKelasPage";
import DetailKelasPembayaran from "../pages/ClassDetail/DetailKelasPembayaran";
import PembayaranSukses from "../pages/ClassDetail/PembayaranSukses";
import { BerandaNoLogin } from "../pages/BerandaNoLogin";
import { KelasSaya } from "../pages/KelasSaya";
import { TopikKelas } from "../pages/TopikKelas";
import FilterSide from "../components/FilterSide";
import { FilterResultKelas } from "../pages/FilterResultKelas";
import { FilterResultTopik } from "../pages/FilterResultTopik";
import KelasContainer from "../pages/ClassDetail/KelasContainer";

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
        <Route path="/berandaNoLog" element={<BerandaNoLogin />} />
        <Route path="/kelas" element={<KelasSaya />} />
        <Route path="/topik" element={<TopikKelas />} />
        <Route path="/filterSide" element={<FilterSide />} />
        <Route path="/filterResultKelas" element={<FilterResultKelas />} />
        <Route path="/filterResultTopik" element={<FilterResultTopik />} />
        <Route path="/detailKelas/:classId" element={<DetailKelasPage />} />
        <Route path="/pembayaran/:classId" element={<DetailKelasPembayaran />} />
        <Route path="/pembayaranSukses/:classId" element={<PembayaranSukses />} />
        <Route path="/tesFilter" element={<KelasContainer/>}/>

      </Routes>
    </BrowserRouter>
  );
};
