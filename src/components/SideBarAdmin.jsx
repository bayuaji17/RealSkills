import React from "react";
// import logo from "../assets/img/logo.png";
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

  // console.log(location);
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

    // <aside>
    //   <nav>
    //     <div className="flex flex-col laptop:items-center laptop:justify-center gap-4 laptop:py-4 items-center py-3 ">
    //       <img src={logo} alt="brand-logo" className="w-28" />
    //       <h1 className="text-2xl text-white font-montserrat font-bold">Real Skills</h1>
    //     </div>
    //     <ul className="py-4 text-base font-bold text-white font-montserrat">
    //       <li className="py-2 text-justify px-5 bg-purple-900">
    //         <a href="/admin/dashboard">Dashboard</a>
    //       </li>
    //       <li className="py-2 text-justify px-5">
    //         <a href="/admin/kelola-kelas">Kelola Kelas</a>
    //       </li>
    //       <li className="py-2 text-justify px-5">
    //         <a href="/admin">Keluar</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </aside>
    //!soon HAPUS
    //     <div>
    //       <aside className="bg-blue-600 h-screen w-3/12">
    //         <div className="flex flex-col">
    //           <div className="flex flex-row items-center mx-auto">
    //             <img src={logo} alt="logo" width={100} />
    //             <h1>Real Skills</h1>
    //           </div>
    //           <div className="flex flex-col w-full py-4 ">
    //             <nav className=" text-white w-full flex flex-col">
    //               <a
    //                 className="hover:bg-purple-700 px-6 py-2 active:bg-purple-600"
    //                 href="/admin/dashboard"
    //               >
    //                 Dashboard
    //               </a>
    //               <a
    //                 className="hover:bg-purple-700 px-6 py-2"
    //                 href="/admin/kelola-kelas"
    //               >
    //                 Kelola Kelas
    //               </a>
    //               <a className="hover:bg-purple-700 px-6 py-2" href="/">
    //                 Keluar
    //               </a>
    //             </nav>
    //           </div>
    //         </div>
    //       </aside>
    //       {/* //TODO template test */}
    //       <div class="flex">
    //   <aside class="h-screen w-[20%] bg-amber-700 border-r-2 border-red-600">
    //     <nav>
    //       <ul>
    //         <li>Home</li>
    //         <li>about</li>
    //         <li>contact</li>
    //         <li>Home</li>
    //       </ul>
    //     </nav>
    //   </aside>
    //   <div class="h-screen w-[80%] bg-orange-400">
    //     <nav class="flex h-16 items-center justify-between bg-red-600 px-5">
    //       <h1>Hi Admin</h1>
    //       <input type="text" class="h-9 w-64 rounded-lg" placeholder="search" />
    //     </nav>
    //     <div>main</div>
    //     <div>
    //       <table>
    //         <tr>
    //           <td>asdsadsad</td>
    //         </tr>
    //         <tr>
    //           <td>asdsadsad</td>
    //         </tr>
    //         <tr>
    //           <td>asdsadsad</td>
    //         </tr>
    //       </table>
    //     </div>
    //   </div>
    // </div>

    //       {/*//todo End template test */}
    //     </div>
  );
};
