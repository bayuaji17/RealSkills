import React, { useState } from "react";
import FilterSide from "../components/FilterSide";
import { KategoriBelajar } from "../components/KategoriBelajar";
import { NavbarLogin } from "../components/NavbarLogin";
import { CardMyclass } from "../components/CardMyClass";

export const KelasSaya = () => {
  const [filteredType, setFilteredType] = useState("all");
  const [filterParams, setFilterParams] = useState({
    category: "",
    level: "",
    type: "",
  });

  const handleFilterChange = (newFilterParams) => {
    let typeValue = "";

    if (newFilterParams.freeClass) {
      typeValue = "1";
    } else if (newFilterParams.premiumClass) {
      typeValue = "2";
    } else {
      typeValue = "";
    }

    let categoryValue = "";

    if (newFilterParams.uiuxDesign) {
      categoryValue = 1;
    } else if (newFilterParams.productManagement) {
      categoryValue = 2;
    } else if (newFilterParams.webDevelopment) {
      categoryValue = 3;
    } else if (newFilterParams.androidDevelopment) {
      categoryValue = 4;
    } else if (newFilterParams.iosDevelopment) {
      categoryValue = 5;
    } else if (newFilterParams.dataScience) {
      categoryValue = 6;
    } else {
      categoryValue = "";
    }

    let levelValue = "";

    if (newFilterParams.semuaLevel) {
      levelValue = "";
    } else if (newFilterParams.beginnerLevel) {
      levelValue = 1;
    } else if (newFilterParams.intermediateLevel) {
      levelValue = 2;
    } else if (newFilterParams.advancedLevel) {
      levelValue = 3;
    } else {
      levelValue = "";
    }

    setFilterParams({
      ...newFilterParams,
      type: typeValue,
      category: categoryValue,
      level: levelValue,
    });
  };

  return (
    <div className="bg-[#EBF3FC] min-h-screen flex flex-col">
      <NavbarLogin />
      {/* <Search /> */}
      <div className=" w-full laptop:flex flex-col flex-wrap justify-center items-center">
        <div>
          <div className="flex items-center justify-between mx-5 pt-0 pb-4 laptop:py-6 laptop:ml-0 laptop:mr-4  text-lg ">
            <h1 className="font-bold">Kelas Berjalan</h1>
            <div className="flex laptop:hidden">
              <FilterSide onFilterChange={handleFilterChange} />
            </div>
          </div>
          <div className="flex w-full gap-20 mb-3 justify-center laptop:pl-0 laptop:pr-0">
            {/* filter&(button&card) */}
            <div className="hidden  laptop:flex">
              <FilterSide onFilterChange={handleFilterChange} />
            </div>
            {/* button&card */}
            <div className="flex  flex-col w-[100vw] gap-3 laptop:w-[40rem] ">
              {/* button */}
              <div className="flex px-4 justify-between   laptop:gap-14 laptop:w-full mb-2 ">
                <button
                  onClick={() => setFilteredType("all")}
                  className="py-1 px-5  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-10 "
                >
                  All
                </button>
                <button
                  onClick={() => setFilteredType("inProgress")}
                  className="py-1 px-7  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-14 "
                >
                  In Progress
                </button>
                <button
                  onClick={() => setFilteredType("completed")}
                  className="py-1 px-6 rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-12"
                >
                  Completed
                </button>
              </div>
              {/* <div className="bg-red-500 py-6 rounded-lg"> */}
              <div className="flex justify-between gap-4 overflow-x-auto  laptop:flex-wrap mx-4">
                {/* <Card myClass={true} /> */}
                <CardMyclass
                  filteredType={filteredType}
                  classesFilter={filterParams}
                />
              </div>
              {/* </div> */}
              <div>
                <h1 className="px-4 font-semibold text-md text-xl mb-4 mt-1  laptop:hidden laptop:mb-0">
                  Kategori
                </h1>
                <div className="laptop:hidden mx-4 flex overflow-x-auto">
                  <KategoriBelajar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
