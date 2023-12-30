import React from "react";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { CardAdminApi } from "../../components/admin/CardAdminApi";
import { TableNotif } from "../../components/admin/TableNotif";

export const AdminUsersNotif = () => {

  return (
    <div>
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />

          <CardAdminApi />

          <div className="container mx-auto w-10/12 pb-4">
            <TableNotif />
          </div>
        </div>
      </div>
    </div>
  );
};
