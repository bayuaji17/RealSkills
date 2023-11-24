import React, { useState } from "react";

export const LoginAdminPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const password = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="parent flex h-screen text-white">
      <div className=" sectionKiri flex w-[40%] h-full bg-[#6148FF] font-montserrat text-center text-2xl justify-center items-center">
        RealSkills
      </div>
      <div className=" sectionKanan flex w-[60%] h-full justify-center items-center bg-white">
        <div className=" flex flex-col justify-center items-center font-poppins">
          <h1 className=" mb-3 font-bold text-3xl font-montserrat text-[#6148FF]">
            Login
          </h1>
          <div className="w-[23rem] h-[14rem] justify-center items-center font-poppins space-y-3 ">
            <label className="text-sm text-[0.9rem] text-black">ID Admin</label>
            <input
              className="border border-black w-full py-3 px-2 rounded-2xl"
              type="text"
              placeholder="ID Admin"
            />
            <span className="text-sm text-black flex justify-between">
              <label> Password</label>
              <a href="/reset" className="text-[#6148FF]">
                Lupa Kata Sandi
              </a>
            </span>

            <input
              className="border border-black w-full py-3 px-2 rounded-2xl"
              type={showPassword ? "text" : "password"}
              placeholder="Masukan Password"
            />
            <button className="bg-[#6148FF] w-full text-white rounded-2xl py-3 ">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
