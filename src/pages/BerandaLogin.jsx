import React from "react";
import { KategoriBelajar } from "../components/KategoriBelajar";
import { KursusPopuler } from "../components/KursusPopuler";
import { NavbarLogin } from "../components/NavbarLogin";
import ban from "../assets/img/ban.png";
import{ Footer2 } from "../components/Footer2";
import { useNavigate } from "react-router-dom";

export const BerandaLogin = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/topik');
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#EBF3FC] laptop:bg-white">
      <NavbarLogin />
      <div className="flex flex-col-reverse laptop:flex-row h-8/12 bg-[#6148FF] ">
      
      <div className="bg-[#6148FF] flex laptop:w-2/6 laptop:justify-center justify-start items-center p-4 md:p-8">
        <div className=" flex flex-wrap w-[14rem] md:w-[18rem] laptop:w-[16rem] "> 
        <p className="text-white font-semibold text-2xl md:text-4xl laptop:text-4xl italic">Hello!</p>
        <p className="text-white font-semibold text-xl md:text-2xl laptop:text-2xl italic">Unleash Your Potential, Craft Real Skills!</p>
        <button 
        onClick={handleLogin}
        className="bg-white text-[#6148FF] rounded-lg text-md font-bold p-1 w-full  ">Let's join class</button>
        </div>
      </div>
      <div className=" relative w-full laptop:w-4/6 flex justify-center ">
        <img src={ban} alt="" className="laptop:p-[2rem] object-cover flex " />
      </div>
    </div>
      <div className="bg-[#EBF3FC] ">
        <h1 className=" px-4 font-semibold text-md text-xl pt-6  laptop:hidden ">
          Category
        </h1>
        <div className=" overflow-x-auto mx-4 laptop:mx-0  laptop:flex-wrap py-3">
          <KategoriBelajar />
        </div>
      </div>
     <KursusPopuler />
     <Footer2/>
    </div>
  );
};
