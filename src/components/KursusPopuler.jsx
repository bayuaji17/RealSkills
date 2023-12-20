import React, { useState } from "react";
import { Card } from "./Card";

export const KursusPopuler = () => {
  const [filterCategory, setFilterCategory] = useState("all");
  

    
  return (
    <div className="px-4 py-1 laptop:mx-[6rem] laptop:px-0 bg-[#EBF3FC] laptop:bg-white">
      <h1 className="font-semibold text-xl text-md">Kursus Populer</h1>
      <div className=" flex justify-between item-center">
        <div className="flex p-2 justify-between item-center font-bold  gap-5 w-full text-sm overflow-x-auto">
          <button 
          onClick={() => setFilterCategory("all")}
          className=" py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF] laptop:py-1 laptop:px-3 laptop:rounded-2xl">
            All
          </button>
          <button 
          onClick={() => setFilterCategory("UI/UX Design")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            UI/UX Design
          </button>
          <button 
          onClick={() => setFilterCategory("Product Management")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            Product Management
          </button>
          <button 
          onClick={() => setFilterCategory("Web Development")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            Web Development
          </button>
          <button 
          onClick={() => setFilterCategory("Android Development")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            Android Development
          </button>
          <button 
          onClick={() => setFilterCategory("IOS Development")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            IOS Development
          </button>
          <button 
          onClick={() => setFilterCategory("Data Science")}
          className="py-1 px-3 rounded-2xl bg-[#E8F1FF] hover:bg-[#6148FF] hover:text-white active:bg-[#6148FF] active:text-white focus:text-white focus:outline-none focus:ring focus:ring-violet-300 focus:bg-[#6148FF]">
            Data Science
          </button>

        </div>
      </div>
      <div className="flex justify-between gap-5 overflow-x-auto">
      <Card isCourse={true} filterCategory={filterCategory} />
      </div>
    </div>
  );
};
