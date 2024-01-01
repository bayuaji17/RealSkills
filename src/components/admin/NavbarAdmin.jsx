import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import RealskillsText from "../../assets/Logo/RealSkills_Text.svg";
export const NavbarAdmin = () => {
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const location = useLocation();
  const getBgClass = (path) => {
    return location.pathname === path ? "bg-[#489CFF]" : "";
  };
  const activeClass = (path) => {
    return location.pathname === path ? "bg-[#489CFF]" : "";
  };

  return (
    <div>
      <Navbar className="max-w-[100%] px-4 py-2 lg:px-8 lg:py-4 rounded-none bg-[#EBF3FC]">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
          <div className="laptop:hidden pr-4">
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              onClick={openDrawer}
              className="hover:cursor-pointer"
            />
          </div>
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            Hi Admin
          </Typography>
          <div className="hidden items-center gap-x-2 lg:flex">
            <div className="relative flex w-full gap-2 md:w-max"></div>
          </div>
        </div>
      </Navbar>
      <Drawer
        open={open}
        onClose={closeDrawer}
        style={{ zIndex: 1000 }}
        className="bg-blue-600"
      >
        <div className="mb-2 flex items-center justify-between px-5">
          <img src={RealskillsText} alt="logo" className="w-56 pt-16" />
          {/* <Typography variant="h5" color="blue-gray">
          </Typography> */}
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#ffff"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List className="font-poppins pt-5">
          <Link to={"/admin/dashboard"}>
            <ListItem
              className={`text-white ${getBgClass("/admin/dashboard")}`}
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
            <ListItem
              className={`text-white ${getBgClass(
                "/admin/users"
              )} ${activeClass("/admin/users/notifikasi")}`}
            >
              Users
            </ListItem>
          </Link>
          <ListItem className="text-white">Log Out</ListItem>
        </List>
      </Drawer>
    </div>
  );
};
