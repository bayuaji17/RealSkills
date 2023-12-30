import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import shopping_list from "../../assets/img/icon/shopping list_.svg";
import { NavbarLogin } from "../../components/NavbarLogin";

const PembayaranSukses = () => {
  const navigate = useNavigate();
  const { classId } = useParams();
  return (
    <div className="parents">
      <div>
        <NavbarLogin />
      </div>

      <div className="header-section flex flex-col justify-center w-full bg-[#FFFF] shadow-lg items-center py-[1.5rem] overflow-hidden">
        <div className="deadline-button-container flex items-center justify-center bg-[#73CA5C] rounded-[0.75rem] w-[90vw] laptop:w-[60%] py-[0.8rem]">
          <span className="font-montserrat text-white text-[2vh] laptop:text-[1rem] laptop:leading-[1.25rem] leading-[2vh] font-black">
            Terimakasih atas pembayaran transaksi
          </span>
        </div>
      </div>

      <div className="body-section flex flex-col justify-center items-center gap-[6.5vh] laptop:gap-[2.5rem] py-[4vh] laptop:py-[2.5rem] overflow-hidden">
        <span className="font-montserrat text-[5vh] laptop:text-[2.5rem] text-dark-blue leading-[2vh] laptop:leading-[0.9rem] font-black">
          Selamat!
        </span>
        <img src={shopping_list} alt="shopping-list" style={{ width : '30vh' }}/>
        <span className="font-black font-montserrat text-[2vh] leading-[3vh] laptop:text-[0.9rem] text-center laptop:leading-[1.5rem]">
          Transaksi pembayaran kelas premium berhasil! <br />
          <span className="font-normal">
            E-receipt telah dikirimkan ke email
          </span>
        </span>
        <div className="button-container flex flex-col gap-[2vh] laptop:gap-[.75rem] justify-center items-center w-full">
          <Link to={`/detailKelas/${classId}`}>
            <button className="font-black text-white text-[2vh] leading-[2vh] flex justify-center items-center py-[1vh] laptop:text-[1rem] bg-dark-blue rounded-[1.5rem] laptop:leading-[1.5rem] laptop:px-[1rem] laptop:py-[.75rem] w-[20vh] laptop:w-full font-montserrat">
              Mulai Belajar
            </button>
          </Link>
          <span
            className="text-[#489CFF] font-black font-montserrat text-[2.25vh] leading-[2vh] laptop:text-[1rem] laptop:leading-[1.5rem] cursor-pointer"
            onClick={() => {
              navigate("/beranda");
            }}
          >
            Kembali Ke Beranda
          </span>
        </div>
      </div>
    </div>
  );
};

export default PembayaranSukses;
