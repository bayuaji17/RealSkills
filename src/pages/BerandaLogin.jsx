import React from "react";
import { KategoriBelajar } from "../components/KategoriBelajar";
import { KursusPopuler } from "../components/KursusPopuler";
import { NavbarLogin } from "../components/NavbarLogin";
import banner from "../assets/img/banner.png";
import grad from "../assets/img/grad.png";
import { useNavigate } from "react-router-dom";

export const BerandaLogin = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/topik');
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#EBF3FC] laptop:bg-white">
      <NavbarLogin />
      <div className="hidden laptop:flex flex-row   ">
      <div className=" relative w-4/6">
        <img src={banner} alt="" className="w-full h-[14rem]" />
        <img
          src={grad}
          alt=""
          className="absolute top-0 left-0 w-full h-[14rem]"
        />
      </div>
      <div className="bg-[#6148FF] w-2/6  flex justify-center items-center">
        <div className=" flex flex-wrap w-[14rem] "> 
        <p className="text-white font-semibold text-2xl italic">Unleash Your Potential, Craft Real Skills!</p>
        <button 
        onClick={handleLogin}
        className="bg-white text-[#6148FF] rounded-lg text-xs font-bold p-2 w-full  ">IKUTI KELAS</button>
        </div>
      </div>
    </div>
      <div className="bg-[#EBF3FC] ">
        <h1 className=" px-4 font-semibold text-md text-xl  laptop:hidden ">
          Kategori
        </h1>
        <div className=" overflow-x-auto mx-4 laptop:mx-0  laptop:flex-wrap py-3">
          <KategoriBelajar />
        </div>
      </div>
     <KursusPopuler />
    </div>
  );
};
