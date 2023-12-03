// import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavbarComponents from "../../assets/components/NavbarComponents";
import badge from "../../assets/img/icon/badge-svg.svg";
import modul from "../../assets/img/icon/clarity_book-line.svg";
import time from "../../assets/img/icon/ri_time-fill.svg";
import message from "../../assets/img/icon/gridicons_chat.svg";

const DetailKelasPage = () => {
  return (
    <div className="parents">
      <div className="nav-component-section">
        <NavbarComponents />
      </div>

      <div className="hero-section flex flex-col gap-2 px-[5.5rem] py-[1rem] bg-[#EBF3FC] w-full">
        <div className="top-text-section flex items-center mt-[1.5rem] gap-[1.25rem]">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          <span className="font-montserrat text-[1rem] font-bold leading-[1.5rem]">
            Kelas Lainnya
          </span>
        </div>

        {/* Title, Course Name, & Author Section */}
        <div className="course-section flex flex-col gap-2 px-[1.5rem] py-[1rem]">
          <div className="name-rate-section w-[65%] h-[1rem] flex justify-between items-center mt-[.5rem]">
            <span className="course-name-text text-[#6148FF] font-montserrat font-black leading-[0.9rem] text-[1.25rem]">
              UI/UX Design
            </span>
            <div className="rating-star-section flex gap-1 items-center">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#F9CC00" }}
              />
              <span className="font-montserrat text-[#202244] font-bold leading-[0.9rem] text-[0.9rem]">
                5.0
              </span>
            </div>
          </div>
          <span className="title-text-section font-black font-montserrat text-[#202244] text-[1.25rem] leading-[1.5rem]">
            Intro To Basic User Interaction Design
          </span>
          <span className="author-text-section font-[600] font-montserrat text-[0.9rem] leading-[1.2rem] ">
            by Simon Doe
          </span>

          {/* Deets Section */}
          <div className="deets-section flex gap-[1.25rem]">
            <div className="badge-level-section flex items-center gap-1">
              <img src={badge} alt="badge-level" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                Beginner Level
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={modul} alt="modul-course" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                5 Modul
              </span>
            </div>
            <div className="badge-level-section flex items-center gap-1">
              <img src={time} alt="course-time" />
              <span className="font-montserrat text-[0.75rem] leading-[0.9rem] font-bold hover:text-[#6148FF] cursor-pointer">
                45 Menit
              </span>
            </div>
          </div>

          {/* Button Telegram Section */}
          <div className="telegram-btn-section relative w-[25%]">
            <button className="bg-[#73CA5C] w-full text-white rounded-[1.6rem] px-[1rem] py-[0.5rem] font-montserrat text-[1rem] leading-[1.5rem] font-black shadow-lg">
              Join Grup Telegram
            </button>
            <div className="message-icon-section absolute transform -translate-y-1/2 right-[3rem] top-1/2 cursor-pointer">
              <img src={message} alt="message-icon" width="30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKelasPage;
