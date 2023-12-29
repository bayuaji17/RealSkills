import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { LoginAdminPage } from "../pages/authentication/LoginAdminPage";
import ResetPasswordPage from "../pages/authentication/ResetPassword/ResetPasswordPage";
import ResetPasswordTautanPage from "../pages/authentication/ResetPassword/ResetPasswordTautanPage";
import DetailKelasPage from "../pages/ClassDetail/DetailKelasPage";
import { Notifikasi } from "../pages/Notifikasi_Akun/Notifikasi";
import { AkunProfil } from "../pages/Notifikasi_Akun/AkunProfil";
import { UbahPassword } from "../pages/Notifikasi_Akun/UbahPassword";
import { RiwayatPembayaran } from "../pages/Notifikasi_Akun/RiwayatPembayaran";

import DetailKelasPembayaran from "../pages/ClassDetail/DetailKelasPembayaran";
import PembayaranSukses from "../pages/ClassDetail/PembayaranSukses";
import { BerandaNoLogin } from "../pages/BerandaNoLogin";
import { KelasSaya } from "../pages/KelasSaya";
import { TopikKelas } from "../pages/TopikKelas";
import FilterSide from "../components/FilterSide";
import { FilterResultKelas } from "../pages/FilterResultKelas";
import { FilterResultTopik } from "../pages/FilterResultTopik";

import KelasContainer from "../pages/ClassDetail/KelasContainer";
import { Settings } from "../components/Setting_Notif_Akun/SettingsNotifAkun";

export const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="admin" element={<LoginAdminPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="/reset" element={<ResetPasswordTautanPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/detailKelas" element={<DetailKelasPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profile" element={<AkunProfil />} />
        <Route path="/ubahPassword" element={<UbahPassword />} />
        <Route path="/riwayatPembayaran" element={<RiwayatPembayaran />} />
        <Route path="/berandaNoLog" element={<BerandaNoLogin />} />
        <Route path="/kelas" element={<KelasSaya />} />
        <Route path="/topik" element={<TopikKelas />} />
        <Route path="/filterSide" element={<FilterSide />} />
        <Route path="/filterResultKelas" element={<FilterResultKelas />} />
        <Route path="/filterResultTopik" element={<FilterResultTopik />} />
        <Route path="/detailKelas/:classId" element={<DetailKelasPage />} />
        <Route
          path="/pembayaran/:classId"
          element={<DetailKelasPembayaran />}
        />
        <Route
          path="/pembayaranSukses/:classId"
          element={<PembayaranSukses />}
        />
        {/* <Route path="/dummy" element={<KelasDummy/>}/> */}
        <Route path="/tesFilter" element={<KelasContainer />} />
        {/* <Route path="/select" element={<SelectDefault/>}/> */}
        {/* <Route path="/detailKelas/:classId" element={<TestDetailKelas/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
