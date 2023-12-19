import React from "react";
import NavbarComponents from "../../assets/components/NavbarAkun";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import bedge from "../../assets/img/icon/bedge.png";
import modul from "../../assets/img/icon/modul.png";
import time from "../../assets/img/icon/time.png";
import notif_pay from "../../assets/img/icon/notif_pay.png";
import background from "../../assets/img/icon/uiux_image.jpg";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export const RiwayatPembayaran = () => {
  return (
    <div className="parent">
      <div className="navbar-component hidden laptop:flex">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2  w-full laptop:h-[11rem] bg-[#EBF3FC] ">
        <div className="back-section hidden laptop:flex items-center mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-bold font-montserrat text-[1.2rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>

        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-[60rem] w-full laptop:w-[75%] rounded-[1rem] mb-[5rem]">
            <div className="title hidden laptop:flex w-full h-[4.7rem]  justify-center items-center  laptop:bg-[#6148FF] rounded-t-2xl">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-3">
                Akun
              </span>
            </div>

            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
              {/* Left Section */}
              <div class="left-section hidden laptop:flex w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-montserrat">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] "
                    />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/profil"
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
                    <span className="text-[#6148FF] text-[1.1rem] font-bold">
                      Riwayat Pembelian
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/"
                    >
                      Keluar
                    </a>
                  </div>
                  <hr />
                  <div className=" flex justify-center items-center p-5">
                    <span className="text-l text-[#8A8A8A]">Version 1.1.0</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="right-section w-full laptop:w-1/2 laptop:my-[2rem] ">
                <div className="back-section flex items-center gap-3 laptop:hidden ">
                  <Link
                    to="/settings"
                    className="text-black text-[1rem] font-bold font-montserrat mb-[1rem]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="xl"
                      style={{ color: "black" }}
                    />
                  </Link>
                </div>
                <div className="title-section flex laptop:justify-evenly laptop:items-center mobile:justify-start mobile:items-start">
                  <h1 className="text-[1.8rem] font-bold text-black mt-[1rem] ">
                    Riwayan Pembayaran
                  </h1>
                </div>

                {/* Riwayat Pembayaran*/}
                <div className="flex flex-col ">
                  <div className="first-payment bg-white rounded-[1rem] mx-[1rem] mt-[1.5rem] h-[20%] border-2 flex flex-col">
                    <img
                      src={background}
                      alt=""
                      className=" object-cover w-full h-[6rem] rounded-t-[1rem]"
                    />
                    <div className="modal-category-rate-section flex flex-col gap-2">
                      <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.2rem]">
                        <span className="font-montserrat text-dark-blue text-[1rem] font-bold ">
                          UI/UX Design
                        </span>
                        <div className="rating-star-section flex gap-1 items-center">
                          <FontAwesomeIcon
                            icon={faStar}
                            size="sm"
                            style={{ color: "#F9CC00" }}
                          />
                          <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                            4.7
                          </span>
                        </div>
                      </div>
                      <div className="mobile-title-course-section flex flex-col gap-1 mx-[1rem] font-montserrat">
                        <span className="course-title font-bold font-montserrat text-[0.8rem] leading-[0.3rem] text-[#202244]">
                          Belajar Web Designer dengan Figma
                        </span>
                        <span className="author-section pt-1 text-[0.5rem] leading-[0.7rem] text-[#000] font-montserrat font-bold">
                          by Angela Doe
                        </span>
                      </div>
                      <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-[0.5]">
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={bedge} alt="badge-level" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            Intermediate Level
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={modul} alt="modul-course" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            10 Modul
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={time} alt="course-time" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            120 Menit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="notif-payment flex items-center gap-1 bg-red-500 w-[30%] ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1rem] h-[0.9rem] ml-2"
                      />
                      <span className="  items-center text-white text-[0.5rem] font-bold p-[0.4rem] ">
                        Waiting for Payment
                      </span>
                    </div>
                  </div>

                  <div className="second-payment bg-white rounded-[1rem] mx-[1rem] mt-[1rem] h-[30%] border-2 flex flex-col">
                    <img
                      src={background}
                      alt=""
                      className=" object-cover w-full h-[6rem] rounded-t-[1rem]"
                    />
                    <div className="modal-category-rate-section flex flex-col gap-2">
                      <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.2rem]">
                        <span className="font-montserrat text-dark-blue text-[1rem] font-bold ">
                          UI/UX Design
                        </span>
                        <div className="rating-star-section flex gap-1 items-center">
                          <FontAwesomeIcon
                            icon={faStar}
                            size="sm"
                            style={{ color: "#F9CC00" }}
                          />
                          <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                            4.8
                          </span>
                        </div>
                      </div>
                      <div className="mobile-title-course-section flex flex-col gap-1 mx-[1rem] font-montserrat">
                        <span className="course-title font-bold font-montserrat text-[0.8rem] leading-[0.7rem] text-[#202244]">
                          Membuat Wireframe Hingga ke Visual Design
                        </span>
                        <span className="author-section pt-1 text-[0.5rem] leading-[0.7rem] text-[#000] font-montserrat font-bold">
                          by Angela Doe
                        </span>
                      </div>
                      <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-[0.5]">
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={bedge} alt="badge-level" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            Intermediate Level
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={modul} alt="modul-course" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            5 Modul
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={time} alt="course-time" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            60 Menit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="notif-payment flex items-center bg-green-500 w-[20%] ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1rem] h-[0.9rem] ml-3 items-center"
                      />
                      <span className=" items-center text-white text-[0.7rem] font-bold p-[0.3rem] ">
                        Paid
                      </span>
                    </div>
                  </div>
                  <div className="third-payment bg-white rounded-[1rem] mx-[1rem] mt-[1rem] h-[30%] border-2 flex flex-col">
                    <img
                      src={background}
                      alt=""
                      className=" object-cover w-full h-[6rem] rounded-t-[1rem]"
                    />
                    <div className="modal-category-rate-section flex flex-col gap-2">
                      <div className="mobile-course-category flex justify-between items-center mx-[1rem] mt-[0.2rem]">
                        <span className="font-montserrat text-dark-blue text-[1rem] font-bold ">
                          UI/UX Design
                        </span>
                        <div className="rating-star-section flex gap-1 items-center">
                          <FontAwesomeIcon
                            icon={faStar}
                            size="sm"
                            style={{ color: "#F9CC00" }}
                          />
                          <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                            4.4
                          </span>
                        </div>
                      </div>
                      <div className="mobile-title-course-section flex flex-col gap-1 mx-[1rem] font-montserrat">
                        <span className="course-title font-bold font-montserrat text-[0.8rem] leading-[0.3rem] text-[#202244]">
                          Pengenalan tentang Design System
                        </span>
                        <span className="author-section pt-1 text-[0.5rem] leading-[0.7rem] text-[#000] font-montserrat font-bold">
                          by Angela Doe
                        </span>
                      </div>
                      <div className="mobile-deets-section flex items-center gap-[1.5rem] mx-[1rem] mt-[0.5]">
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={bedge} alt="badge-level" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            Advanced Level
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={modul} alt="modul-course" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            10 Modul
                          </span>
                        </div>
                        <div className="badge-level-section flex items-center gap-1">
                          <img src={time} alt="course-time" />
                          <span className="font-montserrat text-[0.7rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                            120 Menit
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="notif-payment flex items-center  bg-green-500 w-[20%] ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1rem] h-[0.9rem] ml-3 items-center"
                      />
                      <span className=" items-center text-white text-[0.7rem] font-bold p-[0.3rem]  ">
                        Paid
                      </span>
                    </div>
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
