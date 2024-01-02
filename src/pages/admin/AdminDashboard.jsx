import React, { useState } from "react";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { TablePembayaran } from "../../components/admin/TablePembayaran";
import { CardAdminApi } from "../../components/admin/CardAdminApi";
export const AdminDashboard = () => {
  return (
    <div>
      <div className="flex font-montserrat">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          <CardAdminApi />
          <div className="container mx-auto w-10/12 pb-4">
            <TablePembayaran />
          </div>
        </div>
      </div>
    </div>
  );
};
