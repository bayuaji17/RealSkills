import React from "react";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { CardAdminApi } from "../../components/admin/CardAdminApi";
import { TableKelas } from "../../components/admin/TableKelas";

export const KelolaKelas = () => {
  return (
    <div>
      <div className="flex font-montserrat">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          {/* //! Card */}
          <div className="py-2">
            <div className="">
              <CardAdminApi />
            </div>
          </div>
          {/* //!EndCard */}
          {/* Table */}
          <div className="container mx-auto w-10/12 pb-4">
            {/* <ReactTables /> */}
            <TableKelas />
          </div>
          {/* End Table */}
        </div>
      </div>
    </div>
  );
};
