import React, { useEffect, useState } from "react";
import NavbarComponents from "../../assets/components/NavbarNotif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Vector from "../../assets/img/icon/Vector.png";
import circle_green from "../../assets/img/icon/circle_green.png";
import circle_red from "../../assets/img/icon/circle_red.png";
import { postNotifikasi } from "../../services/notifikasi_akun/notifikasi";

export const Notifikasi = () => {

  // const [LoadData, setLoadData] = useState([]);

  // const getNotifikasi = async () => {
  //   const data = await postNotifikasi();
  //   setLoadData(data.results);
  //   console.log(data, "data profil");
  // };
  // useEffect(() => {
  //   getNotifikasi();
  // }, []);


  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2 h-screen laptop:h-[11rem] laptop:bg-[#EBF3FC] w-full">
        <div className="back-section hidden laptop:flex items-center mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem] ">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-black font-montserrat text-[1.2rem] text-[#6148FF] "
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex mx-[0.9rem] mt-[1rem] laptop:justify-center laptop:items-center mobile:justify-items-start ">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] laptop:h-[35rem] laptop:w-[75%] rounded-[1rem] mb-[5rem] mobile:w-full  ">
            <div className="title w-full h-[4.7rem] laptop:bg-[#6148FF] rounded-t-[1rem]">
              <span className=" flex laptop:justify-center mobile:justify-start items-center laptop:text-white font-bold text-[1.8rem] py-3 mobile:text-black">
                Notifikasi
              </span>
            </div>

            <div className="isi-notifikasi flex flex-col gap-[2.5rem] py-[1rem] laptop:mt-[1rem] laptop:mx-[3.5rem] font-montserrat">
              <div className="first-notification">
                <div className="promosi flex justify-between ">
                  <span className="flex flex-row gap-5">
                    <img
                      src={Vector}
                      alt=""
                      className="h-[1.9rem] w-[1.9rem]"
                    />
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
                    <img
                      src={Vector}
                      alt=""
                      className="w-[1.9rem] h-[1.9rem]"
                    />
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
                      className="w-[0.7rem] h-[0.7rem] items-center"
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
                    <img
                      src={Vector}
                      alt=""
                      className="w-[1.9rem] h-[1.9rem]"
                    />
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
