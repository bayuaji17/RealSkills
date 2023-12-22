import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllClass } from "../../services/class/get-allClasses";

const KelasDummy = () => {
  const [Kelas, setKelas] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getAllClass();
        setKelas(response.data.data.classes);
        console.log(response);
      } catch (error) {
        console.error("Error mengambil data Kelas:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="flex flex-col justify-center w-full h-screen gap-[1.2rem] ">
      {Kelas.map((value) => {
        return (
          <Link to={`/detailKelas/${value.id}`}>
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <div className="w-[50%] flex justify-center items-center flex-col gap-2 my-2 bg-blue-300 hover:bg-dark-blue text-white py-[1rem] rounded-[1.5rem]">
                <span className="font-black font-montserrat text-[1rem]">
                  {value.name}
                </span>
                <span>By : {value.author}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default KelasDummy;
