import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";

export const TablePembayaran = () => {
  const TABLE_HEAD = [
    "ID",
    "Kategori",
    "Kelas Premium",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar",
    ""
  ];

  const TABLE_ROWS = [
    {
      id: 1,
      username: "johndoe123",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      metodePembayaran: "Credit Card",
      tanggalBayar: "21 Sep, 2023 at 2:00 AM",
    },
    {
      id: 2,
      username: "supermanxx",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "-",
    },
    {
      id: 3,
      username: "aderill2",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "Credit Card",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 4,
      username: "aattrill3",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 5,
      username: "frozenzweig4",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 6,
      username: "hclissold5",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 7,
      username: "kcarse6",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 8,
      username: "ifryatt7",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 9,
      username: "gcarluccio8",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "BELUM BAYAR",
      metodePembayaran: "Credit Card",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
    {
      id: 10,
      username: "ntemporal9",
      kategori: "UI/UX Design",
      kelasPremium: "Belajar Web Designer dengan Figma",
      status: "SUDAH BAYAR",
      metodePembayaran: "-",
      tanggalBayar: "9/21/2023 at 12:00 AM",
    },
  ];

  return (
    <div>
      <Card className="h-80 w-[full] overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left ">
          <thead className="">
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
            {TABLE_ROWS.map(
              (
                {
                  id,
                  username,
                  kategori,
                  kelasPremium,
                  status,
                  metodePembayaran,
                  tanggalBayar,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {username}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {kategori}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {kelasPremium}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {metodePembayaran}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tanggalBayar}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {/* <div className="flex flex-row gap-1">
                    <Button size="sm" className="normal-case rounded-2xl bg-blue-600" onClick={handleEdit}>
                      Ubah
                    </Button>
                    <Button size="sm" className="normal-case rounded-2xl bg-red-600" onClick={handleHapus}>
                      Hapus
                    </Button>
                  </div> */}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
