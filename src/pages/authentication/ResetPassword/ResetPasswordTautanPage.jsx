import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ResetPasswordTautanPage = () => {
  const [Email, setEmail] = useState("");
  const isEmailValid = EMAIL_REGEX.test(Email);
  const isEmailLengthValid = Email.length > 0;
  const ERROR_BORDER_COLOR = "border-red-600 focus:outline-red-600";
  const SUCCESS_BORDER_COLOR = "border-green-600 focus:outline-green-600";
  const navigate = useNavigate()

  const emailBorderClass = () => {
    if (isEmailLengthValid > 0 && !isEmailValid) {
      return ERROR_BORDER_COLOR;
    } else if (isEmailLengthValid > 0 && isEmailValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  return (
    <>
      <div className="parents w-full h-screen flex overflow-y-hidden">
        {/* Left Section */}
        <div className="left-section w-[50%] h-screen flex flex-col justify-center items-center">
          <div className="left-container-section flex flex-col gap-[1.5rem] w-[50%]">
            <span className="font-montserrat text-blue-700 text-[1.5rem] font-black leading-[2.25rem]">
              Masuk
            </span>
            <div className="form-section flex flex-col font-poppins gap-[1rem]">
              <div className="input-email-section flex flex-col gap-[0.2rem]">
                <span className="text-[0.9rem]">Email/No. Telepon</span>
                <input
                  onChange={handleEmailChange}
                  value={Email}
                  required
                  type="email"
                  placeholder="example@gmail.com"
                  className={`border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem] ${emailBorderClass()}`}
                />
              </div>
              {isEmailLengthValid && !isEmailValid && (
                <div className="text-red-600 text-xs -mt-2">
                  Gunakan format "contoh@gmail.com"
                </div>
              )}
            </div>
            <button
              className="reset-btn font-poppins text-white bg-blue-700 rounded-[1rem] py-[0.75rem] px-[1.5rem] text-[1rem] disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={!isEmailLengthValid || !isEmailValid}
              onClick={()=>{
                navigate("/resetPassword")  
              }}
            >
              Masuk
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section bg-blue-700 w-[50%] h-screen flex justify-center items-center">
        <div className="brand-text-logo flex gap-2 items-center">
          <img src={logo} alt="RealSkills" className="w-40 h-40"/>
          <span className="text-brand font-montserrat font-black text-white text-[3rem]">
            RealSkills
          </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordTautanPage;
