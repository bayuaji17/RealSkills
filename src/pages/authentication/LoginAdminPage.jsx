import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import { postLoginAdmin } from "../../services/auth/login_admin";
import { useNavigate } from "react-router-dom";

export const LoginAdminPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [FormInput, setFormInput] = useState({
    admin_id: "",
    password: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormInput({
      ...FormInput,
      [id]: value,
    });
  };

  const handleLoginAdmin = async () => {
    const formAdmin = {
      admin_id: FormInput.admin_id,
      password: FormInput.password,
    };
    try {
      const response = await postLoginAdmin(formAdmin);
      toast.success(response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error, "err reset");
    }
  };

  const password = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="parents flex h-screen text-white">
      {/*Left Section*/}
      <div className="hidden laptop:flex laptop:w-[40%] h-full bg-[#6148FF] font-poppins text-center text-2xl justify-center items-center">
        <img src={logo} alt="" className="w-40 h-40" />
        <h1 className="font-bold text-4xl text-white">RealSkills</h1>
      </div>
      {/* Right Section */}
      <div className=" laptop:w-[60%] flex h-full justify-center items-center ">
        <div className=" mobile:ml-4 flex flex-col font-poppins">
          <h1 className="flex justify-center items-center mb-3 font-bold text-3xl text-[#6148FF]">
            Login
          </h1>
          <label className=" flex flex-col justify-start text-sm text-[0.9rem] text-black mb-2">
            ID Admin
          </label>

          <input
            onChange={(e) => handleInput(e)}
            value={FormInput.admin_id}
            id="admin_id"
            type="text"
            className="border rounded-xl p-3 laptop:w-[22rem] mobile: w-[94vw] mb-4 text-black"
            placeholder="ID Admin"
          />

          <span className=" flex justify-between text-sm text-black mb-2">
            <label> Password</label>
            <a href="/reset" className="text-[#6148FF]">
              Lupa Kata Sandi
            </a>
          </span>
          <div className="relative">
            <input
              onChange={(e) => handleInput(e)}
              value={FormInput.password}
              id="password"
              type={showPassword ? "text" : "password"}
              className="border rounded-xl p-3 laptop:w-[22rem] mobile: w-[94vw] mb-4 text-black"
              placeholder="Masukan Password"
            />
            <FontAwesomeIcon
              icon={showPassword}
              className="absolute w-full top-2 right-2 cursor-pointer"
              onClick={password}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              size="xl"
              className="absolute  top-3 right-4 cursor-pointer text-gray-400"
              onClick={password}
            />
          </div>

          <button
            onClick={() => {
              handleLoginAdmin();
            }}
            className="bg-[#6148FF] text-white p-3 rounded-2xl laptop:w-[22rem] mobile:w-[94vw] "
            type="submit"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
};
