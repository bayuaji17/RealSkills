import React from "react";
import NavbarComponents from "../../assets/components/NavbarNotif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Vector from "../../assets/img/icon/Vector.png";
import circle_green from "../../assets/img/icon/circle_green.png";
import circle_red from "../../assets/img/icon/circle_red.png";

export const Notifikasi = () => {
  return (
    <div className="parents">
      <div className="navbar-component">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2 px-[5.5rem] h-[9.7rem] bg-[#EBF3FC] w-full">
        <div className="back-section flex items-center my-[1.5rem] gap-[1.25rem] mx-[10rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="l"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-bold font-montserrat text-l text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className="modal flex flex-col border border-[#6148FF] h-[35rem] w-[80%] rounded-[1rem]">
            <div className="title w-full h-[4.7rem] bg-[#6148FF] rounded-t-[1rem]">
              <span className=" flex justify-center items-center text-white font-bold text-2xl py-3">
                Notifikasi
              </span>
            </div>

            <div className="isi-notifikasi flex flex-col gap-[3rem] py-[1rem] mt-[2rem] mx-[3.5rem] font-montserrat">
              <div className="first-notification">
                <div className="promosi flex justify-between ">
                  <span className="flex flex-row gap-5">
                    <img src={Vector} alt="" className="h-[2rem] w-[2rem]" />
                    <label className="font-semibold text-[#6148FF] text-xl">
                      Promosi
                    </label>
                  </span>

                  <span className="flex justify-end items-end gap-3">
                    <label className="text-sm text-[#8A8A8A] items-center ">
                      2 Maret 2022, 12:00
                    </label>
                    <img
                      src={circle_green}
                      alt=""
                      className="w-[0.7rem] h-[0.7rem]"
                    />
                  </span>
                </div>
                <span className="flex flex-col font-montserrat mx-[3.2rem] gap-2 mt-[.5] ">
                  <p className="font-semibold text-black text-sm ">
                    Dapatkan Potongan 50% selama Bulan Maret!
                  </p>
                  <p className="font-semibold text-[#8A8A8A] text-sm">
                    Syarat dan Ketentuan berlaku!
                  </p>
                </span>
              </div>

              <div className="second-notification">
                <div className="Notifikasi flex justify-between gap-5">
                  <span className="flex flex-row gap-5">
                    <img src={Vector} alt="" className="w-[2] h-[2rem]" />
                    <label className="font-semibold text-[#6148FF] text-xl">
                      Notifikasi
                    </label>
                  </span>

                  <span className="flex justify-end items-end gap-3">
                    <label className="text-sm text-[#8A8A8A] items-center ">
                      1 Maret 2022, 10:00
                    </label>
                    <img
                      src={circle_red}
                      alt=""
                      className="w-[0.7rem] h-[0.7rem]"
                    />
                  </span>
                </div>
                <span className="flex flex-col font-montserrat mx-[3.2rem] gap-2 mt-[.5] ">
                  <p className="font-semibold text-black text-sm">
                    Password berhasil diubah
                  </p>
                </span>
              </div>

              <div className="third-notification">
                <div className="Notifikasi flex justify-between gap-5">
                  <span className="flex flex-row gap-5">
                    <img src={Vector} alt="" className="w-[2] h-[2rem]" />
                    <label className="font-semibold text-[#6148FF] text-xl">
                      Promosi
                    </label>
                  </span>

                  <span className="flex justify-end items-end gap-3">
                    <label className="text-sm text-[#8A8A8A] items-center ">
                      1 Maret 2022, 09:00
                    </label>
                    <img
                      src={circle_green}
                      alt=""
                      className="w-[0.7rem] h-[0.7rem]"
                    />
                  </span>
                </div>
                <span className="flex flex-col font-montserrat mx-[3.2rem] gap-2 mt-[.5] ">
                  <p className="font-semibold text-black text-sm ">
                    Dapatkan Potongan 50% selama Bulan Maret!
                  </p>
                  <p className="font-semibold text-[#8A8A8A] text-sm">
                    Syarat dan Ketentuan berlaku!
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
