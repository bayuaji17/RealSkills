import React, { useState } from "react";
import { SideBarAdminTest } from "../../components/SideBarAdminTest";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { CardAdmin } from "../../components/CardAdmin";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import filterAdmin from "../../assets/Filter.svg";
import logoUsers from "../../assets/Users.svg";
import { TableAdmin } from "../../components/TableAdmin";
import {
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import filter from "../../assets/Filter.svg";
import { FilterAdmin } from "../../components/FilterAdmin";

export const TestGrid = () => {
  const [open, setOpen] = useState(false)
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
        onClick={openDrawer}
      >
        <img src={filter} alt="logo" />
        <h1 className="text-sm text-blue-600">Filter</h1>
      </Button>
      <FilterAdmin open={open} onClose={closeDrawer}/>
    </div>

    // !BLOM FIX
    // <div className="flex">
    //   <div className="h-screen w-[20%] bg-[#6148FF] ">
    //     <SideBarAdminTest />
    //   </div>
    //   <div className="h-screen w-[80%] ">
    //     <NavbarAdmin />
    //     <div className="flex py-11 container mx-auto justify-between">
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
    //       <TableAdmin dataTable={dataTable}/>
    //       {/* <div className="overflow-y-scroll h-[21rem]">
    //         <table className="table-auto w-[100%] text-justify ">
    //           <thead className="bg-[#EBF3FC] text-xs font-normal sticky top-0 ">
    //             <tr>
    //               <th className="p-3">ID</th>
    //               <th className="p-3">Kategori</th>
    //               <th className="p-3">Kelas Premium</th>
    //               <th className="p-3">Status</th>
    //               <th className="p-3">Metode Pembayaran</th>
    //               <th className="p-3">Tanggal Bayar</th>
    //             </tr>
    //           </thead>
    //           <tbody className="text-[0.625rem] font-bold ">
    //             {dataTable.map((data) => (
    //               <tr key={data.id}>
    //                 <td className="p-3">{data.username}</td>
    //                 <td className="p-3">{data.kategori}</td>
    //                 <td className="p-3">{data.kelasPremium}</td>
    //                 <td className="p-3">{data.status}</td>
    //                 <td className="p-3">{data.metodePembayaran}</td>
    //                 <td className="p-3">{data.tglBayar}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};
