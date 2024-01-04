import React from "react";
import cbanner from "../assets/img/cbanner.png";
import ban from "../assets/img/ban.png";
import grad from "../assets/img/grad.png";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex  laptop:flex-row w-screen">
      {/* <div className="hidden laptop:flex relative h-screen w-4/6">
        <img src={ban} alt="" className="w-full h-full bg-cover" />
        <img
          src={grad}
          alt=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </div> */}
      <div className="flex  bg-[#6148FF]  w-screen gap-6 justify-evenly items-center px-4">
       
        <div className=" flex flex-wrap w-[15rem] justify-start laptop:w-[20rem]  ">
          <p className="text-white font-semibold text-base laptop:text-4xl italic">Hello!</p>
          <p className="text-white font-semibold text-base laptop:text-2xl italic">
            Unleash Your Potential, Craft Real Skills!
          </p>
          <button
            onClick={handleLogin}
            className="bg-white text-[#6148FF] rounded-lg text-md font-bold p-1 w-full  "
          >
            Let's join class
          </button>
        </div>
        <div>
        <img src={ban} alt="" className="bg-cover py-[3rem] " />
        </div>
      </div>
    </div>
  );
};
