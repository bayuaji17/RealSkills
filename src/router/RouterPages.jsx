import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { SearchResult } from "../components/SearchResult";
import { ResultCategory } from "../pages/ResultCategory";
import { BerandaLogin } from "../pages/BerandaLogin";
import ProtectedToken from "../components/ProtectedComponents/ProtectedToken";
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
        <Route
          path="admin/dashboard"
          element={
            <ProtectedToken>
              <AdminDashboard />
            </ProtectedToken>
          }
        />
        <Route
          path="admin/kelola-kelas"
          element={
            <ProtectedToken>
              <KelolaKelas />
            </ProtectedToken>
          }
        />
        <Route
          path="admin/kelola-kelas/:id"
          element={
            <ProtectedToken>
              <DetailsKelolaKelas />
            </ProtectedToken>
          }
        />
        <Route
          path="admin/kelola-kelas/chapters/:id"
          element={
            <ProtectedToken>
              <Chapters />
            </ProtectedToken>
          }
        />
        {/* //*ADMIN AREA */}
        {/* PROFILE AREA */}
        <Route
          path="/settings"
          element={
            <ProtectedToken>
              <Settings />
            </ProtectedToken>
          }
        />
        <Route
          path="/notifikasi"
          element={
            <ProtectedToken>
              <Notifikasi />
            </ProtectedToken>
          }
        />
        <Route
          path="/profil"
          element={
            <ProtectedToken>
              <AkunProfil />
            </ProtectedToken>
          }
        />
        <Route
          path="/ubahPassword"
          element={
            <ProtectedToken>
              <UbahPassword />
            </ProtectedToken>
          }
        />
        <Route
          path="/riwayatPembayaran"
          element={
            <ProtectedToken>
              <RiwayatPembayaran />
            </ProtectedToken>
          }
        />
        {/* PROFILE AREA */}
        <Route path="/kelas" element={
        <ProtectedToken>
        <KelasSaya />
        </ProtectedToken>
        } />
        <Route path="/topik" element={<TopikKelas />} />
        {/* DetailKelas Area */}
        <Route
          path="/detailKelas/:classId"
          element={
            <ProtectedToken>
              <DetailKelasPage />
            </ProtectedToken>
          }
        />
        <Route
          path="/pembayaran/:classId"
          element={
            <ProtectedToken>
              <DetailKelasPembayaran />
            </ProtectedToken>
          }
        />
        <Route
          path="/pembayaranSukses/:classId"
          element={
            <ProtectedToken>
              <PembayaranSukses />
            </ProtectedToken>
          }
        />
        {/* DetailKelas Area */}
        <Route path="/berandaNoLog" element={<BerandaNoLogin />} />
        <Route path="/beranda" element={<BerandaLogin />} />
        <Route
          path="/kelas"
          element={
            <ProtectedToken>
              <KelasSaya />
            </ProtectedToken>
          }
        />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/kategori/:id" element={<ResultCategory />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
