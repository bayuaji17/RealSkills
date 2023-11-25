import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const password = () => {
    setShowPassword(!showPassword);
  };

        //Testing
  return (
    <div className="flex flex-row justify-center items-center h-screen font-poppins  ">
      <div className="flex flex-col justify-center items-center  h-full  laptop:w-7/12">
        <div className="flex flex-col justify-start text-sm">
        <h3 className="flex  mb-3 text-3xl font-bold text-[#6148FF] justify-center laptop:justify-start">Masuk</h3>
        <label className="flex flex-col mb-2">Email/Telepon
        </label>
        <input type="email" className="border rounded-xl p-3 mb-3 laptop:w-[22rem] mobile: w-[94vw]" placeholder="Contoh: johndee@gmail.com" ></input>
        <span className="flex justify-between mb-2">
          <label>Masukkan Password</label>
          
          <a href="/reset" className="text-[#6148FF]"> Lupa Password</a>
         
        </span>
        <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border rounded-xl p-3 laptop:w-[22rem] mobile: w-[94vw] mb-4"
              placeholder="Masukkan Password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="xl"
              className="absolute  top-3 right-4 cursor-pointer text-gray-400"
              onClick={password}
            />
          </div>
        <button className="border rounded-xl p-2 laptop:w-[22rem] mobile:w-[94vw] mb-6 bg-blue-300 text-white hover:bg-[#6148FF]" >Masuk</button>      
        <p className="flex flex-row justify-center gap-2">
          Belum punya akun? 
          <span className="font-semibold text-[#6148FF]">
            <a href="register" > Daftar di sini</a>
          </span>
        </p>
        <span className="laptop:hidden mobile: font-bold text-[#6148FF] flex justify-center mt-2">
            <a href="/" > Masuk Tanpa Login</a>
          </span>
        </div>   
        </div>
      <div className=" hidden laptop:flex justify-center items-center h-full w-5/12 bg-[#6148FF]">
        <img src={logo} alt=" " className="w-40 h-40"></img>
        <h1 className="font-bold text-4xl text-white">RealSkills</h1>
      </div>
    </div>
  );
};
