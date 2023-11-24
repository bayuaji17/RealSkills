import React, { useRef, useState } from "react";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const RegisterPage = () => {
  const Ref = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [noTelp, setNoTelp] = useState(62);
  const [password, setPassword] = useState('');














  return (
    <div className="font-poppins">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-center w-8/12 items-center">
          <form action="" method="post">
            <h1 className="text-[#6148FF] font-bold text-[1.5rem]">Daftar</h1>
            <div className="flex flex-col">
              <label for="nama" class="py-2 text-xs">
                Nama
              </label>
              <div class="relative w-[30rem]">
                <div class="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    style={{ color: "#188E55" }}
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    style={{ color: "#FF0000" }}
                  />
                </div>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Nama Lengkap"
                  class="w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2"
                />
              </div>
              <label for="nama" class="py-2 text-xs">
                Email
              </label>
              <div class="relative w-[30rem]">
                <div class="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    style={{ color: "#188E55" }}
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    style={{ color: "#FF0000" }}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="contoh : johndoe@gmail.com"
                  class="w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2"
                />
              </div>
              <label for="nama" class="py-2 text-xs">
                Nomor Telepon
              </label>
              <div class="relative w-[30rem]">
                <div class="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    style={{ color: "#188E55" }}
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    style={{ color: "#FF0000" }}
                  />
                </div>
                <input
                  type="number"
                  name="noTelp"
                  id="noTelp"
                  placeholder="+62.1231231231313"
                  class="w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2"
                />
              </div>
              <label for="nama" class="py-2 text-xs">
                Buat Password
              </label>
              <div class="relative w-[30rem]">
                <div class="absolute inset-y-0 end-5 flex items-center ps-3.5">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    size="xl"
                    style={{ color: "#188E55" }}
                  />
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    size="xl"
                    style={{ color: "#FF0000" }}
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Buat Password"
                  class="w-full h-12 rounded-xl px-5 border-[#D0D0D0] border-2"
                  required
                />
              </div>
            </div>
            <button className="w-[30rem] bg-blue-500 rounded-xl py-2 my-4 text-sm text-white font-medium">
              Daftar
            </button>
          </form>
          <div className="flex flex-row gap-x-2">
            <p className="text-sm">Sudah Punya Akun ?</p>
            <a href="login" className="text-[#6148FF] font-bold text-sm">
              {" "}
              Masuk di sini
            </a>
          </div>
        </div>
        <div className="flex h-screen w-4/12">
          <div className="flex flex-row bg-[#6148FF] w-full justify-center items-center">
            <div className="flex flex-row items-center gap-x-4">
              <img src={logo} alt="test" className="w-40 h-40" />
              <h1 className="font-bold text-4xl text-white">RealSkills</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
