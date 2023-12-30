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
import { Notifikasi } from "../pages/Notifikasi_Akun/Notifikasi";
import { AkunProfil } from "../pages/Notifikasi_Akun/AkunProfil";
import { UbahPassword } from "../pages/Notifikasi_Akun/UbahPassword";
import { RiwayatPembayaran } from "../pages/Notifikasi_Akun/RiwayatPembayaran";
import { Settings } from "../components/Settings";

import DetailKelasPembayaran from "../pages/ClassDetail/DetailKelasPembayaran";
import PembayaranSukses from "../pages/ClassDetail/PembayaranSukses";
import { BerandaNoLogin } from "../pages/BerandaNoLogin";
import { KelasSaya } from "../pages/KelasSaya";
import { TopikKelas } from "../pages/TopikKelas";
import FilterSide from "../components/FilterSide";
// import { FilterResultKelas } from "../pages/FilterResultKelas";
// import { FilterResultTopik } from "../pages/FilterResultTopik";


import {SearchResult} from "../components/SearchResult"
import { Coba } from "../pages/Coba";
import { ResultCategory } from "../pages/ResultCategory";
import { BerandaLogin } from "../pages/BerandaLogin"
import { AdminUsers } from "../pages/admin/AdminUsers";
import { AdminUsersNotif } from "../pages/admin/AdminUsersNotif";
export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Beranda />} /> */}
        <Route path="/" element={<BerandaNoLogin />} />
        {/* //*Auth */}
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        {/* //*Auth */}
        {/* //*ADMIN AREA */}
        <Route path="admin/dashboard" element={<AdminDashboard/>} />
        <Route path="admin/kelola-kelas" element={<KelolaKelas/>} />
        <Route path="admin/users" element={<AdminUsers/>} />
        <Route path="admin/users/notifikasi" element={<AdminUsersNotif/>} />
        <Route path="admin/kelola-kelas/:id" element={<DetailsKelolaKelas/>} />
        <Route path="admin/kelola-kelas/chapters/:id" element={<Chapters/>} />
        {/* //*ADMIN AREA */}


        <Route path="/detailKelas" element={<DetailKelasPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil" element={<AkunProfil />} />
        <Route path="/ubahPassword" element={<UbahPassword />} />
        <Route path="/riwayatPembayaran" element={<RiwayatPembayaran />} />
        <Route path="/kelas" element={<KelasSaya />} />
        <Route path="/topik" element={<TopikKelas />} />
        <Route path="/filterSide" element={<FilterSide />} />
        <Route path="/detailKelas/:classId" element={<DetailKelasPage />} />
        <Route path="/pembayaran/:classId" element={<DetailKelasPembayaran />} />
        <Route path="/pembayaranSukses/:classId" element={<PembayaranSukses />} />

        <Route path="/berandaNoLog" element={<BerandaNoLogin/>} />
        <Route path="/beranda" element={<BerandaLogin/>} />
        <Route path="/kelas" element={<KelasSaya/>} />
        <Route path="/topik" element={<TopikKelas/>} />
        <Route path="/filterSide" element={<FilterSide/>} />
        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/kategori/:id" element={<ResultCategory/>} />

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
