import React from "react";

export const LoginAdminPage = () => {
  return (
    <div className="parent flex h-screen text-white">
      <div className=" sectionKiri flex w-[40%] h-full bg-[#6148FF] font-montserrat text-center text-2xl justify-center items-center">
        RealSkills
      </div>
      <div className=" sectionKanan flex w-[60%] h-full justify-center items-center bg-white">
        <div className=" flex flex-col justify-center items-center font-poppins">
          <h1 className=" mb-4 font-bold text-3xl font-montserrat text-[#6148FF]">
            Login
          </h1>
          <div className="w-[25rem] h-[14.3rem] justify-center items-center font-poppins space-y-3 ">
            <span className="text-sm text-[0.9rem] text-black">ID Admin</span>
            <input
              className="border border-black w-full py-3 px-2 rounded-2xl"
              type="text"
              placeholder="ID Admin"
            />
            <div className="flex justify-between font-poppins text-[0.9rem]">
              <span className="text-sm text-black">Password</span>
              <span className="text-sm text-[#6148FF]">Lupa Kata Sandi</span>
            </div>

            <input
              className="border border-black w-full py-3 px-2 rounded-2xl"
              type="password"
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
