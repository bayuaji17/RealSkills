import React, {  useState } from "react";
import { NavbarKelas } from "../components/NavbarKelas";
import { Search } from "../components/Search";
import FilterSide from "../components/FilterSide";
import { Card } from "../components/Card";

export const TopikKelas = () => {
  const [filteredType, setFilteredType] = useState("all"); // "all", "premium", "gratis"
  
  return (
    <div className="bg-[#EBF3FC] min-h-screen  flex flex-col">
      <NavbarKelas />
      <Search />
      <div className=" w-full laptop:flex flex-col flex-wrap justify-center items-center">
        <div>
          <div className="flex items-center justify-between mx-5 pt-0 pb-2 laptop:py-6 laptop:ml-0 laptop:mr-4  text-lg ">
            <h1 className="font-bold">Topik Kelas</h1>
            <div className="laptop:hidden">
              <FilterSide />
            </div>
            <div className="hidden laptop:flex relative  w-[16rem] text-xs bg-[#EBF3FC] ">
              <input
                className="p-4 w-full flex justify-between rounded-lg shadow-lg"
                placeholder="Cari Kelas terbaik...."
              />
              <button className=" bg-[#6148FF] absolute right-4 mt-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="p-1"
                >
                  <path
                    d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                    fill="#EBF3FC"
                  />
                  <path
                    d="M11.4118 8.58609C11.7908 8.96609 11.9998 9.46809 11.9998 10.0001H13.9998C14.0007 9.47451 13.8974 8.95398 13.6959 8.46857C13.4944 7.98316 13.1987 7.54251 12.8258 7.17209C11.3118 5.66009 8.68683 5.66009 7.17383 7.17209L8.58583 8.58809C9.34583 7.83009 10.6558 7.83209 11.4118 8.58609Z"
                    fill="#EBF3FC"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex gap-20 px-4 justify-center mb-3 laptop:pl-0 laptop:pr-0">
            {/* filter&(button&card) */}

            <div className="hidden laptop:flex">
              <FilterSide />
            </div>

            {/* button&card */}
            <div className="flex px-4 flex-col w-[100vw] gap-5 laptop:w-[40rem]">
              {/* button */}
              <div className="flex justify-between  laptop:gap-14 laptop:w-full">
                <button 
                onClick={() => setFilteredType("all")}
                className="py-1 px-5  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-10 ">
                  All
                </button>
                <button 
                onClick={() => setFilteredType("premium")}
                className="py-1 px-5  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-12 ">
                  Kelas Premium
                </button>
                <button 
                onClick={() => setFilteredType("gratis")}
                className="py-1 px-5 rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-10">
                  Kelas Gratis
                </button>
              </div>
              <div className=" gap-3 flex justify-between flex-wrap ">
              <Card isTopik={true} filteredType={filteredType} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
