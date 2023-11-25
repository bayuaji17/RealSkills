import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleRepeat, setPasswordVisibleRepeat] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const togglePasswordRepeat = () => {
    setPasswordVisibleRepeat((prevVisible2) => !prevVisible2);
  };

  const showToastSuccess =()=>{
    toast.success("Success", {
    })
  }

  return (
    <>
      <div className="parents w-full h-screen flex overflow-y-hidden">
      {/* Left Section */}
        <div className="left-section w-[50%] h-screen flex flex-col justify-center items-center">
          <div className="left-container-section flex flex-col gap-[1.5rem] w-[50%]">
            <span className="font-montserrat text-blue-700 text-[1.5rem] font-black leading-[2.25rem]">
              Reset Password
            </span>
            <div className="form-section flex flex-col font-poppins gap-[1rem]">
              <div className="input-password-section flex flex-col gap-[0.2rem] w-[100%] relative">
                <div className="header-password-section flex justify-between">
                  <span className="text-[0.9rem]">Masukkan Password Baru</span>
                </div>
                <div className="password-input-container relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    minLength="8"
                    className="border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem] w-full"
                    required
                  />
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    size="md"
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer eye-icon absolute right-[1rem] top-1/2 transform -translate-y-1/2"
                  />
                </div>
              </div>

              <div className="input-password-section flex flex-col gap-[0.2rem] w-[100%] relative">
                <div className="header-password-section flex justify-between">
                  <span className="text-[0.9rem]">Ulangi Password Baru</span>
                </div>
                <div className="password-input-container relative">
                  <input
                    type={passwordVisibleRepeat ? "text" : "password"}
                    minLength="8"
                    className="border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem] w-full"
                    required
                  />
                  <FontAwesomeIcon
                    icon={passwordVisibleRepeat ? faEyeSlash : faEye}
                    size="md"
                    onClick={togglePasswordRepeat}
                    className="cursor-pointer eye-icon absolute right-[1rem] top-1/2 transform -translate-y-1/2"
                  />
                </div>
              </div>
            </div>
            <button 
            className="reset-btn font-poppins text-white bg-blue-700 rounded-[1rem] py-[0.75rem] px-[1.5rem] text-[1rem]"
            onClick={()=>{showToastSuccess()}}
            >
              Simpan
            </button>
          </div>
        </div>

{/* Right Section */}
        <div className="right-section bg-blue-700 w-[50%] h-screen flex justify-center items-center">
          <span className="text-brand font-montserrat font-black text-white text-[5rem]">
            RealSkills
          </span>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
