import React from "react";
import NavbarComponents from "../../assets/components/NavbarAkun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import foto from "../../assets/img/icon/foto.png";

export const AkunProfil = () => {
  return (
    <div className="parents">
      <div className="navbar-component">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2 px-[5.5rem] h-[9.7rem] bg-[#EBF3FC] w-full ">
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
          <div className="modal flex flex-col border border-[#6148FF] h-[50rem] w-[80%] rounded-[1rem]">
          <div className="title w-full h-[4.7rem] bg-[#6148FF] rounded-t-2xl ">
              <span className=" flex justify-center items-center text-white font-bold text-2xl py-3">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow rounded-b-2xl">
             {/* Left Section */}
              <div class="left-section w-1/2 m-[2rem]">
                <div className="flex flex-col gap-5 font-montserrat ">
                  <div className="flex flex-row gap-4">
                    <img
                      src={pencil}
                      alt=""
                      className="w-[1.5rem] h-[1.5rem] "
                    />
                    <span className="text-[#6148FF] text-[1rem] font-bold ">
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
                    <span className="text-black text-[0.8rem]">
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
              <div className="right-section w-1/2 mx-[5rem]">
                <div className="picture-section flex justify-evenly items-center mt-10">
                  <img src={foto} alt="" className="w-[6rem] h-[6rem]" />
                </div>
                <div className="flex flex-col gap-3 font-montserrat mt-[2rem]">
                  <span className="text-[1rem] ">Nama</span>
                  <input
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.5rem] px-[1rem] relative"
                    placeholder="John Doe"
                  />

                  <span className="text-[1rem]">Email</span>
                  <input
                    type="email"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.5rem] px-[1rem] relative"
                    placeholder="Johndoe@gmail.com"
                  />

                  <span className="text-[1rem]">Nomor Telepon</span>
                  <input
                    type="tel"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.5rem] px-[1rem] relative"
                    placeholder="+62 812121121121"
                  />

                  <span className="text-[1rem]">Negara</span>
                  <input
                    type="negara"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.5rem] px-[1rem] relative"
                    placeholder="Masukkan Negara tempat tinggal"
                  />

                  <span className="text-[1rem]">Kota</span>
                  <input
                    type="negara"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.5rem] px-[1rem] relative"
                    placeholder="Masukkan kota tempat tinggal"
                  />

                  <button
                    className="bg-blue-300 text-white py-[0.7rem] px-[1rem] mt-[1rem] rounded-2xl hover:bg-[#6148FF] relative"
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
