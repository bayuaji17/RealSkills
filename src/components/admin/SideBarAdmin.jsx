import React from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
export const SideBarAdmin = () => {
  const location = useLocation();

  const bgClass = () => {
    return location.pathname === "/admin/kelola-kelas" ? "bg-red-600" : "";
  };

  const activeClass = () => {
    return location.pathname === "/admin/dashboard" ? "bg-red-600" : "";
  };

  return (
    <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none bg-[#6148FF]">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          RealSkills
        </Typography>
      </div>
      <List>
        <a href="/admin/dashboard">
          <ListItem
            className={`text-white hover:bg-[#489CFF] hover:text-white hover:font-semibold ${activeClass()}`}
          >
            Dashboard
          </ListItem>
        </a>
        <a href="/admin/kelola-kelas">
          <ListItem className={`text-white ${bgClass()}`}>
            Kelola Kelas
          </ListItem>
        </a>
        <ListItem className="text-white">Log Out</ListItem>
      </List>
    </Card>
  );
};
