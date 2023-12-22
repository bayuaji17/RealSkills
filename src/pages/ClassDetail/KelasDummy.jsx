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
    <div className="flex flex-col gap-[1.2rem]">
      {/* <Link to={`/detailKelas/${Kelas[1].id}`}>
        <span className="font-black text-red-600 text-[2rem]">
          Nama : {Kelas[1].name}
        </span>
      </Link>
      <Link to={`/detailKelas/${Kelas[2].id}`}>
        <span className="font-black text-red-600 text-[2rem]">
          Nama : {Kelas[2].name}
        </span>
      </Link> */}

      {Kelas.map((value) => (
        <div key={value.id} className="w-full h-screen">
          <div className="flex justify-center items-center gap-[1.5rem] w-full h-full">
            <Link to={`/detailKelas/${value.id}`}>
              <div className="flex flex-col items-center justify-center gap-[1rem] rounded-lg bg-blue-300 hover:bg-dark-blue my-[1rem] px-[2rem] py-[1rem]">
                <span className="font-montserrat font-black text-white text-[1rem] leading-[1.5rem]">
                  {value.name}
                </span>
                <span>{value.author}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KelasDummy;
