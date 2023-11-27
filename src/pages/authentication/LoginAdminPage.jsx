import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export const LoginAdminPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const password = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="parent flex h-screen text-white">
      {/*Left Section*/}
      <div className="hidden laptop:flex laptop:w-[40%] h-full bg-[#6148FF] font-montserrat text-center text-2xl justify-center items-center">
        <img src={logo} alt="" className="w-40 h-40" />
        <h1 className="font-bold text-2xl text-white">RealSkills</h1>
      </div>
      {/* Right Section */}
      <div className=" laptop:w-[60%] flex h-full justify-center items-center ">
        <div className=" mobile:ml-3 flex flex-col font-poppins">
          <h1 className="flex justify-center items-center mb-3 font-bold text-3xl font-montserrat text-[#6148FF]">
            Login
          </h1>
          <label className=" flex flex-col justify-start text-sm text-[0.9rem] text-black">
            ID Admin
          </label>
          <input
            className="border text-black p-3 rounded-2xl laptop:w-[22rem] mobile:w-[94vw] mb-4"
            type="text"
            placeholder="ID Admin"
          />
          <span className=" flex justify-between text-sm text-black  mb-2">
            <label> Password</label>
            <a href="/reset" className="text-[#6148FF]">
              Lupa Kata Sandi
            </a>
          </span>
          <div className="relative">
            <input
              className="border text-black p-3 rounded-2xl laptop:w-[22rem] mobile:w-[94vw] mb-4"
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Password"
            />
            <FontAwesomeIcon
              icon={showPassword}
              className="absolute w-full top-2 right-2 cursor-pointer"
              onClick={password}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="xl"
              className="absolute  top-3 right-4 cursor-pointer text-gray-400"
              onClick={password}
            />
          </div>

          <button className="bg-[#6148FF] w-full text-white rounded-2xl py-3 ">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};
