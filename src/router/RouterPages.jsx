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
import { FilterResultKelas } from "../pages/FilterResultKelas";
import { FilterResultTopik } from "../pages/FilterResultTopik";
import KelasContainer from "../pages/ClassDetail/KelasContainer";

import KelasContainer from "../pages/ClassDetail/KelasContainer";


import {SearchResult} from "../components/SearchResult"
import { Coba } from "../pages/Coba";
import { ResultCategory } from "../pages/ResultCategory";
import { BerandaLogin } from "../pages/BerandaLogin"
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
        <Route path="/detailKelas" element={<DetailKelasPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil" element={<AkunProfil />} />
        <Route path="/ubahPassword" element={<UbahPassword />} />
        <Route path="/riwayatPembayaran" element={<RiwayatPembayaran />} />
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

        <Route path="/berandaNoLog" element={<BerandaNoLogin/>} />
        <Route path="/berandaLogin" element={<BerandaLogin/>} />
        <Route path="/kelas" element={<KelasSaya/>} />
        <Route path="/topik" element={<TopikKelas/>} />
        <Route path="/filterSide" element={<FilterSide/>} />
        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/coba/:id" element={<Coba/>} />
        <Route path="/kategori/:id" element={<ResultCategory/>} />
        {/* <Route path="/select" element={<SelectDefault/>}/> */}
        {/* <Route path="/detailKelas/:classId" element={<TestDetailKelas/>}/> */}

      </Routes>
    </BrowserRouter>
  );
};
