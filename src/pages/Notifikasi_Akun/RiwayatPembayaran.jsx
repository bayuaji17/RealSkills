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

export const RiwayatPembayaran = () => {
  return (
    <div className="parent">
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
          <div className="modal flex flex-col border border-[#6148FF] h-[100%] w-[80%] rounded-[1rem]">
            <div className="title w-full h-[4.7rem] bg-[#6148FF] rounded-t-2xl">
              <span className=" flex justify-center items-center text-white font-bold text-2xl py-3">
                Akun
              </span>
            </div>

            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
              {/* Left Section */}
              <div class="left-section w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-montserrat">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] "
                    />
                    <span className="text-black text-[0.8rem] ">
                      Profil Saya
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img
                      src={settings}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                    <span className="text-black text-[0.8rem]">
                      Ubah Password
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <span className="text-[#6148FF] text-[1rem] font-bold">
                      Riwayat Pembelian
                    </span>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem]" />
                    <span className="text-black text-[0.8rem]">Keluar</span>
                  </div>
                  <hr />
                  <div className=" flex justify-center items-center p-5">
                    <span className="text-l text-[#8A8A8A]">Version 1.1.0</span>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="right-section w-1/2 my-[2rem] ">
                <div className="title-section flex justify-evenly items-center">
                  <h1 className="text-2xl font-bold text-black ">
                    Riwayan Pembayaran
                  </h1>
                </div>

                {/* Riwayat Pembayaran*/}
                <div className="flex flex-col ">
                  <div className="first-payment rounded-[1rem] mx-[1rem] mt-[1.5rem] h-[40%] border-2 flex flex-col">
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
                    <div className="notif-payment flex items-center gap-1 bg-red-500 w-1/2 ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1.2rem] h-[1.2rem] ml-2"
                      />
                      <span className="  items-center text-white text-[0.7] font-bold  ">
                        Waiting for Payment
                      </span>
                    </div>
                  </div>

                  <div className="second-payment rounded-[1rem] mx-[1rem] mt-[1rem] h-[40%] border-2 flex flex-col">
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
                        <span className="course-title font-bold font-montserrat text-[0.8rem] leading-[0.3rem] text-[#202244]">
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
                    <div className="notif-payment flex items-center gap-1 bg-green-500 w-[20%] ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1.2rem] h-[1.2rem] ml-2 items-center"
                      />
                      <span className="  items-center text-white text-[0.7] font-bold  ">
                        Paid
                      </span>
                    </div>
                  </div>
                  <div className="second-payment rounded-[1rem] mx-[1rem] mt-[1rem] h-[40%] border-2 flex flex-col">
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
                    <div className="notif-payment flex items-center gap-1 bg-green-500 w-[20%] ml-4 my-2 rounded-lg">
                      <img
                        src={notif_pay}
                        alt=""
                        className="w-[1.2rem] h-[1.2rem] ml-2 items-center"
                      />
                      <span className="  items-center text-white text-[0.7] font-bold  ">
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
