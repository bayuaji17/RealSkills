import React from "react";
import { Card, List, ListItem } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
import LogoRealskills from "../../assets/Logo/Logo_Text.svg";
export const SideBarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getBgClass = (path) => {
    return location.pathname === path ? "bg-[#489CFF]" : "";
  };
  const activeClass = (path) => {
    return location.pathname === path ? "bg-[#489CFF]" : "";
  };
  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    toast.success("Log Out Berhasil!");
    navigate("/admin");
  };

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-[#6148FF] ">
      <div className="mb-2 p-4 mx-auto">
        <img src={LogoRealskills} alt="Logo Real Skills" className="w-28" />
      </div>
      <List>
        <Link to={"/admin/dashboard"}>
          <ListItem
            className={`text-white hover:text-white hover:font-semibold ${getBgClass(
              "/admin/dashboard"
            )}`}
          >
            Dashboard
          </ListItem>
        </Link>
        <Link to={"/admin/kelola-kelas"}>
          <ListItem
            className={`text-white ${getBgClass("/admin/kelola-kelas")}`}
          >
            Kelola Kelas
          </ListItem>
        </Link>
        <Link to={"/admin/users"}>
          <ListItem className={`text-white ${getBgClass("/admin/users")} ${activeClass("/admin/users/notifikasi")}`}>
            Users
          </ListItem>
        </Link>
        <ListItem className="text-white" onClick={handleLogout}>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};
