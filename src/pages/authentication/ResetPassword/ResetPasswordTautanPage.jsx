import React from "react";

const ResetPasswordTautanPage = () => {
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
                  type="email"
                  placeholder="example@gmail.com"
                  className="border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem]"
                />
              </div>
            </div>
            <button className="reset-btn font-poppins text-white bg-blue-700 rounded-[1rem] py-[0.75rem] px-[1.5rem] text-[1rem]">
              Masuk
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

export default ResetPasswordTautanPage;
