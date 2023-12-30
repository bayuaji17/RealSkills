import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/all-users";
import { Button, Card, CardFooter, Dialog, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import { PostNotif } from "./PostNotif";
import { getUserById } from "../../services/notifikasi_akun/get_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteNotifById } from "../../services/delete-notif";

export const TableNotif = () => {
  const [dataNotif, setDataNotif] = useState([]);
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleOpen = () => setOpen(!open);

  const getUser = async () => {
    const token = CookieStorage.get(CookieKeys.AuthToken);
    try {
      const response = await getUserById(token);
      setDataNotif(response.data.user.notifications);
      console.log(response.data.user.notifications, "dari notifikasi");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  const handleHapus = (row) => {
    setSelectedRow(row);
    setHapus(true);
  };
  const handleDeleteSubmit = async () => {
    try {
      await deleteNotifById(selectedRow.id);
      setHapus(false);
      toast.success("Notifikasi Berhasil dihapus");
      getUser()
    } catch (error) {
      setHapus( false);
      toast.error("Notifikasi gagal dihapus");
      console.error(error);
    }
  };
  const TABLE_HEAD = ["Title", "Message", "Time", "Action", ""];
  return (
    <div>
      <PostNotif open={open} handler={handleOpen} />
      {/* UNTUK HAPUS */}
      <Dialog open={hapus} handler={() => setHapus(false)}>
        <DialogHeader>Anda yakin ingin menghapus kelas ini ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setHapus(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDeleteSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* UNTUK HAPUS */}
      
      <div className="flex flex-row items-center justify-between px-5 flex-wrap py-3 ">
        <h1 className="text-lg font-bold">List Notifikasi</h1>
        <div className="flex flex-row gap-3">
          <Link to={"/admin/users"}>
            <Button onClick={handleOpen} color="blue">
              Table User
            </Button>
          </Link>
          <Button onClick={handleOpen} color="blue">
            Broadcast Notifikasi
          </Button>
        </div>
      </div>
      <div>
        <Card className="h-80 w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="sticky top-0">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataNotif?.map((data, index) => {
                  const originalDate = new Date(data.created_at);
                  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC",
                  });
                  const formattedDate = dateFormatter.format(originalDate);
                return (
                  <tr key={index}>
                    <td className="p-3 pl-6 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.title}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data.body}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {formattedDate}
                      </Typography>
                    </td>
                    <td className="p-3 border-b-2">
                      <Typography variant="small" color="blue-gray">
                        <Button color="red"  onClick={() => handleHapus(data)}>DELETE</Button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};
