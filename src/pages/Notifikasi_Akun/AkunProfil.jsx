import React, { useEffect, useState } from "react";
import NavbarComponents from "../../assets/components/NavbarAkun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import foto from "../../assets/img/icon/foto.png";
import { getUsers } from "../../services/notifikasi_akun/get_user";
import { Link } from "react-router-dom";

export const AkunProfil = () => {
  const [LoadData, setLoadData] = useState([]);

  const getDataUser = async () => {
    const data = await getUsers();
    setLoadData(data.results);
    console.log(data.data, "data profil");
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2  w-full  laptop:h-[11rem] bg-[#EBF3FC]  ">
        <div className="back-section hidden laptop:flex items-center mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-black font-montserrat text-[1.2rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center  ">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-[52rem] w-full laptop:w-[75%] rounded-[1rem] mb-[5rem]">
            <div className="title hidden laptop:flex w-full h-[4.7rem] justify-center items-center laptop:bg-[#6148FF] rounded-t-2xl ">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-5">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
              {/* Left Section */}
              <div className="left-section hidden laptop:flex w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-montserrat ">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.6rem] h-[1.6rem] "
                    />
                    <span className="text-[#6148FF] text-[1.1rem] font-bold ">
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
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/ubahPassword"
                    >
                      Ubah Password
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={pay} alt="" className="w-[1.5rem] h-[1.5rem] " />
                    <a
                      className="text-black text-[0.9rem] font-bold hover:text-[#6148FF]"
                      href="/riwayatPembayaran"
                    >
                      Riwayat Pembayaran
                    </a>
                  </div>
                  <hr />
                  <div className=" flex flex-row gap-4">
                    <img src={out} alt="" className="w-[1.5rem] h-[1.5rem] " />
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
              <div className="right-section w-full laptop:w-1/2 laptop:mx-[4rem] ">
                <div className="back-section flex items-center gap-3 laptop:hidden ">
                  <Link
                    to="/settings"
                    className="text-black text-[1rem] font-bold font-montserrat"
                  >
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      size="xl"
                      style={{ color: "black" }}
                    />
                  </Link>
                </div>
                <div className="picture-section flex justify-evenly items-center mt-10">
                  <img src={foto} alt="" className="w-[6rem] h-[6rem]" />
                </div>
                <div className="flex flex-col gap-2 font-montserrat mt-[2rem] ">
                  <span className="text-[1rem] ">Nama</span>
                  <input
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="John Doe"
                  />

                  <span className="text-[1rem]">Email</span>
                  <input
                    type="email"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Johndoe@gmail.com"
                  />

                  <span className="text-[1rem]">Nomor Telepon</span>
                  <input
                    type="tel"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="+62 812121121121"
                  />

                  <span className="text-[1rem]">Negara</span>
                  <input
                    type="negara"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Masukkan Negara tempat tinggal"
                  />

                  <span className="text-[1rem]">Kota</span>
                  <input
                    type="negara"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Masukkan kota tempat tinggal"
                  />

                  <button
                    className="bg-blue-300 text-white py-[1rem] px-[1rem] mt-[1rem] rounded-2xl hover:bg-[#6148FF] "
                    type="submit"
                  >
                    Simpan Profil Saya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
