import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import {faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import filterAdmin from "../../assets/Filter.svg";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import { TablePembayaran } from "../../components/TablePembayaran";
import { CardAdminApi } from "../../components/CardAdminApi";
export const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(!open);
  };
  return (
    <div>
  
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          {/* //! Card */}
          <CardAdminApi/>
          {/* //!EndCard */}

          {/* Table */}
          <div className="container mx-auto w-10/12 pb-4">
            <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
              <h1 className="text-xl font-bold">Status Pembayaran</h1>
              <div className="flex flex-row gap-2">
                <Button
                  variant="outlined"
                  className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
                >
                  <img src={filterAdmin} alt="logo" />
                  <h1 className="text-sm text-blue-600">Filter</h1>
                </Button>
                <div className={`relative pb-2`}>
                  <input
                    type="text"
                    className={`rounded-full px-4 border-2 border-[#6148FF] h-10 transition-all duration-500 w-0 focus:w-40 ${
                      open
                        ? "w-40 mobile:w-24 mobile:focus:w-28"
                        : "w-10 mobile:w-10"
                    }`}
                  />
                  <Typography>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ color: "#6148FF" }}
                      className={`absolute inset-y-0 py-3 right-3 transition-all duration-500 cursor-pointer`}
                      onClick={show}
                    />
                  </Typography>
                </div>
              </div>
            </div>
            <TablePembayaran />
          </div>
          {/* End Table */}
        </div>
      </div>
    </div>

    //!DELETE SOON
    // <div className="flex">
    //   <div className="laptop:hidden inline">
    //     <FontAwesomeIcon
    //       icon={faBars}
    //       className="absolute text-3xl ml-4 top-9 cursor-pointer"
    //       onClick={showSidebar}
    //     />
    //   </div>
    //   {show && (
    //     <div className="laptop:h-screen laptop:w-[20%] bg-[#6148FF] w-3/4 laptop:static h-screen absolute z-40">
    //       <FontAwesomeIcon
    //         icon={faBars}
    //         className="absolute text-white text-3xl end-5 top-5 cursor-pointer"
    //         onClick={showSidebar}
    //       />
    //       <SideBarAdmin />
    //     </div>
    //   )}
    //   <div className="laptop:h-screen laptop:w-[20%] laptop:bg-[#6148FF] mobile:w-0 w-0 h-0">
    //     <SideBarAdmin />
    //   </div>
    //   <div className="laptop:h-screen laptop:w-[80%] flex-1 ">
    //     <div className="z-0">
    //       <NavbarAdmin />
    //     </div>
    //     <div className="flex flex-col py-4 gap-y-5 laptop:flex-row laptop:py-11 container mx-auto laptop:justify-between">
    //       <CardAdmin
    //         logoUser={logoUsers}
    //         totalUsers={500}
    //         tittleCards={"Active Users"}
    //         bgColor={"bg-blue-600"}
    //       />
    //       <CardAdmin
    //         logoUser={logoUsers}
    //         totalUsers={300}
    //         tittleCards={"Active Class"}
    //         bgColor={"bg-green-600"}
    //       />
    //       <CardAdmin
    //         logoUser={logoUsers}
    //         totalUsers={200}
    //         tittleCards={"Premium Class"}
    //         bgColor={"bg-blue-600"}
    //       />
    //     </div>
    //     <div className="container mx-auto">
    //       <div className="flex justify-between pb-4">
    //         <h1 className="text-xl font-bold">Status Pembayaran</h1>
    //         <div className="flex justify-end items-center gap-4">
    //           <img src={filterAdmin} alt="filter" />
    //           <FontAwesomeIcon
    //             icon={faMagnifyingGlass}
    //             size="xl"
    //             style={{ color: "#6148FF" }}
    //           />
    //         </div>
    //       </div>
    //       <TableAdmin tHeading={tHeading} data={dataTable} />
    //       {/* <TableAdmin tHeading={tHeading} data={dataTable} cellStyles={cellStyles} /> */}
    //     </div>
    //   </div>
    // </div>

    // <div>
    //   <div className="flex ml-[-100%]">
    //     <div className="h-screen w-3/12 bg-violet-600">
    //       <div className="flex flex-row items-center gap-6 px-4 pt-5">
    //         <img src={logo} alt="logo" className="w-36" />
    //         <h1 className="text-center text-white text-3xl">RealSkills</h1>
    //       </div>
    //       <ul className="px-4 py-5">
    //         <li className="py-2">
    //           <Link to={"/admin/dashboard"}>Dashboard</Link>
    //         </li>
    //         <li className="py-2">
    //           <Link to={"/admin/kelola-kelas"}>Kelola Kelas</Link>
    //         </li>
    //         <li className="py-2">
    //           <a
    //             href=""
    //             className="text-base font-bold text-white hover:bg-red-600"
    //           >
    //             {" "}
    //             Keluar{" "}
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex w-9/12 flex-col">
    //       <div className="h-[6.25rem] bg-red-600 flex items-center">
    //         <h1 className="text-3xl">Hi Admin !</h1>
    //       </div>
    //       <div className="flex-grow bg-green-400">
    //         <div className="flex flex-row gap-10 justify-center pt-10 ">
    //           {/* Card */}
    //           <div className="w-[19.5rem] h-[6.75rem] rounded-2xl bg-blue-500">
    //             <div className="flex flex-row px-6 items-center h-full ">
    //               {/* <FontAwesomeIcon icon={faUserGroup} className="bg-white text-6xl px-2 py-2 rounded-xl" style={{color:"red"}} /> */}
    //               <img
    //                 src={logoUser}
    //                 alt="active user"
    //                 className="bg-white p-[1.2rem] rounded-3xl"
    //                 // style={{width:"35%"}}
    //               />
    //               <div className="flex flex-col px-4 text-white">
    //                 <h1>450</h1>
    //                 <h1>Active Users</h1>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Card */}
    //           {/* Card */}
    //           <div className="w-[19.5rem] h-[6.75rem] rounded-2xl bg-blue-500">
    //             <div className="flex flex-row px-6 items-center h-full ">
    //               {/* <FontAwesomeIcon icon={faUserGroup} className="bg-white text-6xl px-2 py-2 rounded-xl" style={{color:"red"}} /> */}
    //               <img
    //                 src={logoUser}
    //                 alt="active user"
    //                 className="bg-white p-[1.2rem] rounded-3xl"
    //                 // style={{width:"35%"}}
    //               />
    //               <div className="flex flex-col px-4 text-white">
    //                 <h1>450</h1>
    //                 <h1>Active Users</h1>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Card */}
    //           {/* Card */}
    //           <div className="w-[19.5rem] h-[6.75rem] rounded-2xl bg-blue-500">
    //             <div className="flex flex-row px-6 items-center h-full ">
    //               {/* <FontAwesomeIcon icon={faUserGroup} className="bg-white text-6xl px-2 py-2 rounded-xl" style={{color:"red"}} /> */}
    //               <img
    //                 src={logoUser}
    //                 alt="active user"
    //                 className="bg-white p-[1.2rem] rounded-3xl"
    //                 // style={{width:"35%"}}
    //               />
    //               <div className="flex flex-col px-4 text-white">
    //                 <h1>450</h1>
    //                 <h1>Active Users</h1>
    //               </div>
    //             </div>
    //           </div>
    //           {/* End Card */}
    //         </div>
    //         <table>
    //           <tr>
    //             <td>test</td>
    //             <td>test</td>
    //             <td>test</td>
    //           </tr>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
