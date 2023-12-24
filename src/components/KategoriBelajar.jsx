import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { kategori } from "../services/kategori";

export const KategoriBelajar = () => {
  const [dataKategori, setDataKategori] = useState([]);
  // const id = useParams();

  const fetchKategori = async () => {
    try {
      const response = await kategori();
      setDataKategori(response.data.data);     
    } catch (error) {
      console.error("Error fetching kategori:", error);
    }
  };

  useEffect(() => {
    fetchKategori();
  }, []); //[id]

  return (
    <>
      <div className=" laptop:mx-[6rem] laptop:px-0">
        <h1 className="hidden laptop:flex laptop:font-semibold laptop:text-md laptop:text-xl laptop:pt-1">
          Kategori Belajar
        </h1>
        <div className="flex justify-between gap-4   ">          
        {dataKategori.map((value) => (
          <div key={value.id} >
              <div className="rounded-3xl my-3 w-[14rem] h-[13rem] bg-[#3730a3] laptop:w-[10rem] laptop:h-[8rem] laptop:bg-[#EBF3FC] laptop:my-1">
                <img
                  className="flex rounded-3xl mb-1 w-[14rem] h-[11rem] laptop:w-[10rem] laptop:h-[6rem]"
                  src={value.image}
                  alt={value.name}
                />{" "}
                {/* <img className="rounded-3xl mb-1  w-full h-[6rem]" src={logo} /> */}
                <h2 className=" text-center mb-1 text-white laptop:text-black" ><hr/>{value.name}</h2>
              </div>
          </div>
            ))}
        </div>
      </div>
    </>
  );
};
