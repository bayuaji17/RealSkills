import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import pencil from "../../assets/img/icon/pencil.png";
import settings from "../../assets/img/icon/settings.png";
import pay from "../../assets/img/icon/pay.png";
import out from "../../assets/img/icon/out.png";
import { Link, useParams } from "react-router-dom";
import { getUserById } from "../../services/notifikasi_akun/get_user";
import { putUpdate } from "../../services/notifikasi_akun/update_profile";
import { toast } from "react-toastify";
import { NavbarLogin } from "../../assets/components/NavbarLogin";
export const AkunProfil = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { AuthToken } = useParams();
  const [userData, setUserData] = useState({
    profile_picture: null,
    name: "",
    email: "",
    phone_number: "",
    country: "",
    city: "",
  });

  const handleInputFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // const handleInputFile = (e) => {
  //   setUserData({ ...userData, profile_picture: e.target.files[0] });
  // };

  useEffect(() => {
    const fetchDetailUser = async () => {
      try {
        const data = await getUserById(AuthToken);
        setUserData(data);
        console.log(data, "data user");
      } catch (error) {
        console.log("data error", error);
      }
    };

    fetchDetailUser();
  }, [AuthToken]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      data: {
        ...prevUserData.data,
        profile: {
          ...prevUserData.data.profile,
          [id]: value,
        },
        [id]: value,
      },
    }));
    console.log(e.target.value, "ini isinya");
  };

  const handleSaveProfile = async () => {
    try {
      const response = await putUpdate(AuthToken, userData);
      toast.success(response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log("User profile updated successfully");
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error updating user profile", error);
    }
  };

  return (
    <div className="parents">
      <div className="navbar-component hidden laptop:flex">
        <NavbarLogin />
      </div>

      <div className="hero-section flex flex-col gap-2  w-full  laptop:h-[11rem] bg-[#EBF3FC]  ">
        <div className="back-section hidden laptop:flex items-center mt-[2.3rem] mb-[0.7rem] gap-[1.25rem] mx-[11.5rem]">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="l"
            style={{ color: "#6148FF" }}
          />
          <a
            className="font-black font-montserrat text-[1rem] text-[#6148FF]"
            href="/"
          >
            Kembali ke Beranda
          </a>
        </div>
        <div className="flex mx-[0.9rem] mt-[1rem] justify-center items-center  ">
          <div className="modal flex flex-col laptop:border laptop:border-[#6148FF] min-h-screen laptop:h-auto w-full laptop:w-[75%] rounded-[1rem] mb-[4rem]">
            <div className="title hidden laptop:flex w-full h-[4.7rem] justify-center items-center laptop:bg-[#6148FF] rounded-t-2xl ">
              <span className=" flex laptop:justify-center laptop:items-center text-white font-bold text-[1.8rem] py-5">
                Akun
              </span>
            </div>
            <div className="flex flex-row w-full flex-grow rounded-b-2xl mb-[2rem]">
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
                  <label htmlFor="profile_picture" className="cursor-pointer">
                    <div className="flex justify-center items-center w-[8rem] h-[8rem]  border-4 border-[#6148FF] rounded-full overflow-hidden">
                      {selectedImage ? (
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // Placeholder or default image
                        <span className="text-[1.5rem]">+</span>
                      )}
                    </div>
                    <input
                      id="profile_picture"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      // value={userData.data?.profile?.profile_picture}
                      onChange={handleInputFile}
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-2 font-montserrat mt-[1rem] ">
                  <span className="text-[1rem] ">Nama</span>
                  <input
                    id="name"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Name"
                    value={userData.data?.name}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Email</span>
                  <input
                    id="email"
                    type="email"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Email"
                    value={userData.data?.email}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Nomor Telepon</span>
                  <input
                    id="phone_number"
                    type="tel"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Phone Number"
                    value={userData.data?.profile?.phone_number}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Negara</span>
                  <input
                    id="country"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Masukkan Negara tempat tinggal"
                    value={userData.data?.profile?.country}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <span className="text-[1rem]">Kota</span>
                  <input
                    id="city"
                    type="text"
                    className="border-2 border-[#D0D0D0] text-black rounded-2xl py-[0.7rem] px-[1rem] "
                    placeholder="Masukkan kota tempat tinggal"
                    value={userData.data?.profile?.city}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <button
                    className="bg-blue-300 text-white py-[1rem] px-[1rem] mt-[1rem] rounded-2xl hover:bg-[#6148FF] "
                    type="submit"
                    onClick={handleSaveProfile}
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
