import React, { useState } from "react";
import FilterSide from "../components/FilterSide";
import { Card } from "../components/Card";
import { NavbarLogin } from "../components/NavbarLogin";
// import { Button } from "@material-tailwind/react";

export const TopikKelas = () => {
  const [filteredType, setFilteredType] = useState("all"); // "all", "premium", "gratis"
  const [filterParams, setFilterParams] = useState({
    page: 1,
    limit: 20,
    category: "",
    level: "",
    type: "",
  });

  // const handlePreviousPage = () => {
  //   if (filterParams.page > 1) {
  //     setFilterParams((prevParams) => ({
  //       ...prevParams,
  //       page: prevParams.page - 1,
  //     }));
  //   }
  // };

  // const handleNextPage = () => {
  //   setFilterParams((prevParams) => ({
  //     ...prevParams,
  //     page: prevParams.page + 1,
  //   }));
  // };

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
      page: 1,
      limit: 20,
    });
  };

  return (
    <div className="bg-[#EBF3FC] min-h-screen  flex flex-col">
      <NavbarLogin />
      {/* <Search /> */}
      <div className=" w-full laptop:flex flex-col flex-wrap justify-center items-center">
        <div>
          <div className="flex items-center justify-between mx-5 mt-3 laptop:mt-0 pt-0 pb-2 laptop:py-6 laptop:ml-0 laptop:mr-4  text-lg ">
            <h1 className="font-bold">Course</h1>
            <div className="flex laptop:hidden">
              <FilterSide onFilterChange={handleFilterChange} />
            </div>
          </div>
          <div className="flex gap-20 px-4 justify-center mb-3 laptop:pl-0 laptop:pr-0">
            {/* filter&(button&card) */}

            <div className="hidden laptop:flex">
              <FilterSide onFilterChange={handleFilterChange} />
            </div>

            {/* button&card */}
            <div className="flex flex-col w-[100vw] gap-5 laptop:w-[40rem]">
              {/* button */}
              <div className="flex justify-evenly  laptop:gap-14 laptop:w-full">
                <button
                  onClick={() => setFilteredType("all")}
                  className="py-1 px-5  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-10 "
                >
                  All
                </button>
                <button
                  onClick={() => setFilteredType("premium")}
                  className="py-1 px-5  rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-12 "
                >
                  Premium Class
                </button>
                <button
                  onClick={() => setFilteredType("gratis")}
                  className="py-1 px-5 rounded-xl bg-white hover:bg-[#6148FF] hover:text-white active:text-white focus:text-white active:bg-[#6148FF] focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-10"
                >
                  Free Class
                </button>
              </div>
              <div className=" gap-3 flex justify-between flex-wrap ">
                <Card
                  isTopik={true}
                  filteredType={filteredType}
                  classesFilter={filterParams}
                />
              </div>
              {/* <div className="flex gap-4 justify-end ">
                <Button
                  variant="gradient"
                  size="sm"
                  color="green"
                  onClick={handlePreviousPage}
                  disabled={filterParams.page === 1}
                >
                  Previous
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  color="green"
                  onClick={handleNextPage}
                >
                  Next
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
