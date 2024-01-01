import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import { Link, useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { NavbarLogin } from "../../components/NavbarLogin";

export const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2 w-full laptop:h-[11rem] bg-[#EBF3FC] ">
        <div className="back-section hidden laptop:flex items-center mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-black font-montserrat text-[1rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="back-section flex items-center gap-3 laptop:hidden m-[1rem] ">
          <Link
            to="/beranda"
            className="text-black text-[1rem] font-bold font-montserrat"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="xl"
              style={{ color: "black" }}
            />
          </Link>
        </div>
        <div className="flex mx-[0.9rem] justify-center items-center">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-auto w-full laptop:w-[75%] rounded-[1rem] mb-[4rem]">
            <div className="title flex w-full h-[3.5rem] laptop:h-[4.8rem] justify-center items-center laptop:bg-[#6148FF] rounded-t-2xl">
              <span className=" flex laptop:justify-center laptop:items-center mobile:justify-start mobile:item-start laptop:text-white mobile:text-black font-bold text-[1.8rem] py-3 mr-2">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow laptop:rounded-b-2xl mobile:rounded-b-2xl">
              {/* Left Section */}
              <div className="w-full h-[21rem] bg-white rounded-2xl">
                <div className="flex flex-col gap-5 font-poppins m-[1.3rem]">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] "
                    />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/profile"
                    >
                      Profil Saya
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img
                      src={settings}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/ubahPassword"
                    >
                      Ubah Password
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/riwayatPembayaran"
                    >
                      Riwayat Pembayaran
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="./"
                      onClick={() => {
                        CookieStorage.remove(CookieKeys.AuthToken);
                        navigate("/");
                      }}
                    >
                      Keluar
                    </a>
                  </div>
                  <hr />
                  <div className=" flex justify-center items-center p-5 mt-[2.7rem]">
                    <span className="text-l text-[#8A8A8A]">Version 1.1.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
