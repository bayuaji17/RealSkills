import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleCheck,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
// import { useCreateUser } from "../../services/auth/register-user";

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NOTELP_REGEX = /^62\d{10,}$/;
const ERROR_BORDER_COLOR = "border-red-600 focus:outline-red-600";
const SUCCESS_BORDER_COLOR = "border-green-600 focus:outline-green-600";

export const RegisterPage = () => {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const { mutate : register } = useCreateUser()

  const isPasswordValid = PASSWORD_REGEX.test(password);
  const isPasswordLengthValid = password.length > 0;
  const isEmailValid = EMAIL_REGEX.test(email);
  const isEmailLengthValid = email.length > 0;
  const isNoTelpValid = NOTELP_REGEX.test(noTelp);
  const isNoTelpLengthValid = noTelp.length > 0;

  const emailBorderClass = () => {
    if (isEmailLengthValid > 0 && !isEmailValid) {
      return ERROR_BORDER_COLOR;
    } else if (isEmailLengthValid > 0 && isEmailValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };
  const noTelpBorderClass = () => {
    if (isNoTelpLengthValid > 0 && !isNoTelpValid) {
      return ERROR_BORDER_COLOR;
    } else if (isNoTelpLengthValid > 0 && isNoTelpValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const passwordBorderClass = () => {
    if (isPasswordLengthValid && !isPasswordValid) {
      return ERROR_BORDER_COLOR;
    } else if (isPasswordLengthValid && isPasswordValid) {
      return SUCCESS_BORDER_COLOR;
    }
  };

  const handleNamaChange = (e) => {
    const newNama = e.target.value;
    setNama(newNama);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };
  const handleNoTelpChange = (e) => {
    let newNoTelp = e.target.value;
    newNoTelp = newNoTelp.replace(/\D/g, "");

    if (!newNoTelp.startsWith("62")) {
      newNoTelp = "62" + newNoTelp;
    }
    setNoTelp(newNoTelp);
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // const registerUser = () => {
  //   register({
  //     name : nama,
  //     email : email,
  //     password : password,
  //     phone_number : noTelp,
  //   })
  // }

  return (
    <div className="font-poppins">
      <div className="flex laptop:flex-row laptop:justify-between">
       
        <div className="flex flex-col h-screen w-screen px-6 justify-center mobile:w-screen laptop:w-7/12 laptop:items-center">
          <a href="/" className="laptop:hidden mobile:py-4">
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="2xl"
              style={{ color: "#005eff" }}
            />{" "}
        
          </a>
          <form method="post">
            <h1 className="text-[#6148FF] font-bold text-[1.5rem] font-montserrat text-center laptop:text-left">
              Daftar
            </h1>
            <div className="flex flex-col">
              {/* NAMA */}
              <label htmlFor="nama" className="py-2 text-xs">
                Nama
              </label>
              <div className="relative w-[90vmin] mobile:w-[94vw] laptop:w-[30rem]">
                <div className="absolute inset-y-0 end-5 flex items-center ps-3.5"></div>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Nama Lengkap"
                  value={nama}
                  onChange={handleNamaChange}
                  className="w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2"
                  required
                />
              </div>
              {/* EMAIL */}
              <label htmlFor="email" className="py-2 text-xs">
                Email
              </label>
              <div className="relative w-[90vmin] mobile:w-[94vw] laptop:w-[30rem]">
                <div className="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  {email.length > 0 ? (
                    <div>
                      {isEmailValid ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="xl"
                          style={{ color: "#188E55" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          style={{ color: "#FF0000" }}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmailChange}
                  value={email}
                  required
                  placeholder="contoh : johndoe@gmail.com"
                  className={`w-full h-12 rounded-xl px-5 border-2 border-[#D0D0D0]  ${emailBorderClass()}`}
                />
              </div>
              {isEmailLengthValid && !isEmailValid && (
                <div className="text-red-600 text-xs mt-2">
                  Gunakan format "contoh@gmail.com"
                </div>
              )}
              {/* No Telp */}
              <label htmlFor="noTelp" className="py-2 text-xs">
                No Telepon
              </label>
              <div className="relative w-[90vmin] mobile:w-[94vw] laptop:w-[30rem]">
                <div className="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  {isNoTelpLengthValid > 0 ? (
                    <div>
                      {isNoTelpValid ? (
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          size="xl"
                          style={{ color: "#188E55" }}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          size="xl"
                          style={{ color: "#FF0000" }}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
                <input
                  type="tel"
                  name="noTelp"
                  id="noTelp"
                  onChange={handleNoTelpChange}
                  value={noTelp}
                  required
                  placeholder="+62.895123720923"
                  className={`w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2 ${noTelpBorderClass()}`}
                />
              </div>
              {isNoTelpLengthValid && !isNoTelpValid && (
                <div className="text-red-600 text-xs mt-2">
                  Gunakan format "628-888-855-222"
                </div>
              )}
              {/* Password */}
              <label htmlFor="password" className="py-2 text-xs">
                Buat Password
              </label>
              <div className="relative w-[90vmin] mobile:w-[94vw] laptop:w-[30rem]">
                <div className="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  <div className="pr-2">
                    {isPasswordLengthValid && !isPasswordValid && (
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        size="xl"
                        style={{ color: "#FF0000" }}
                      />
                    )}
                    {isPasswordLengthValid && isPasswordValid && (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        size="xl"
                        style={{ color: "#188E55" }}
                      />
                    )}
                  </div>
                  <div
                    onClick={togglePassword}
                    className="hover:cursor-pointer"
                  >
                    {isPasswordVisible ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        style={{ color: "#8A8A8A" }}
                        size="xl"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ color: "#8A8A8A" }}
                        size="xl"
                      />
                    )}
                  </div>
                </div>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Buat Password"
                  value={password}
                  onChange={handlePasswordChange}
                  className={`w-full h-12 rounded-xl px-5 border-2 border-[#D0D0D0] ${passwordBorderClass()} `}
                  required
                />
              </div>
              {isPasswordLengthValid && !isPasswordValid && (
                <div className="text-red-600 text-xs mt-2">
                  Setidaknya satu huruf besar. <br />
                  Setidaknya satu huruf kecil. <br />
                  Setidaknya satu angka.
                  <br />
                  Panjang total antara 8 dan 24 karakter.
                </div>
              )}
              {isPasswordLengthValid && isPasswordValid && (
                <div className="text-green-600 text-sm mt-2 font-bold">
                  Password Sangat Kuat
                </div>
              )}
            </div>
            <button
              className="w-[90vmin] mobile:w-[94vw] laptop:w-[30rem] bg-blue-500 rounded-xl py-2 my-4 text-sm text-white font-medium disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={
                !isEmailValid ||
                !isNoTelpValid ||
                !isPasswordValid ||
                !isPasswordLengthValid ||
                !isEmailLengthValid ||
                !isNoTelpLengthValid
              }
              // onClick={()=>{
              //   registerUser()
              // }}
            >
              Daftar
            </button>
          </form>
          <div className="flex flex-row gap-x-2 justify-center">
            <p className="text-sm">Sudah Punya Akun ?</p>
            <a href="login" className="text-[#6148FF] font-bold text-sm">
              {" "}
              Masuk di sini
            </a>
          </div>
        </div>

        {/* SIDE IMAGE */}
        <div className="hidden laptop:flex laptop:h-screen laptop:w-5/12">
          <div className="flex flex-row bg-[#6148FF] w-full justify-center items-center">
            <div className="flex flex-row items-center gap-x-4">
              <img src={logo} alt="test" className="w-40 h-40" />
              <h1 className="font-bold text-4xl text-white">RealSkills</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
