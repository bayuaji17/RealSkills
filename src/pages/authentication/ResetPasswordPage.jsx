import React from "react";

const ResetPasswordPage = () => {
  return (
    <>
      <div className="parents w-full h-screen flex overflow-y-hidden">
        <div className="left-section w-[50%] h-screen flex flex-col justify-center items-center">
          <div className="left-container-section flex flex-col gap-[1.5rem] w-[50%]">
            <span className="font-montserrat text-dark-blue text-[1.5rem] font-black leading-[2.25rem]">
              Masuk
            </span>
            <div className="form-section flex flex-col font-poppins gap-[1rem]">
              <div className="input-email-section flex flex-col gap-[0.2rem] w-[100%]">
                <span className="text-[0.9rem]">Email/No. Telepon</span>
                <input
                  type="email"
                  className="border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem]"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="input-password-section flex flex-col gap-[0.2rem] w-[100%">
                <div className="header-password-section flex justify-between">
                  <span className="text-[0.9rem]">Password</span>
                  <span className="text-[0.9rem] text-dark-blue">
                    Lupa Kata Sandi
                  </span>
                </div>
                <input
                  type="password"
                  className="border-2 border-[#D0D0D0] rounded-[1rem] py-[0.5rem] px-[1rem]"
                />
              </div>
            </div>
          <button className="reset-btn font-poppins text-white bg-dark-blue rounded-[1rem] py-[0.75rem] px-[1.5rem] text-[1rem]">
            Masuk
          </button>
          </div>
        </div>

        <div className="right-section bg-dark-blue w-[50%] h-screen flex justify-center items-center">
          <span className="text-brand font-montserrat font-black text-white text-[5rem]">
            RealSkills
          </span>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
