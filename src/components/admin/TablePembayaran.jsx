import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getAllPayment } from "../../services/all-payment";

export const TablePembayaran = () => {
  const [dataPayments, setDataPayments] = useState([]);
  const TABLE_HEAD = [
    "ID",
    "Kategori",
    "Kelas Premium",
    "Status",
    "Metode Pembayaran",
    "Tanggal Bayar",
    "",
  ];

  const getAllPayments = async () => {
    try {
      const response = await getAllPayment();
      console.log(response.data.data, "dari getAllPayments");
      setDataPayments(response.data.data);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPayments();
  }, []);

  const getLabelById = (id, mapping) => {
    const match = mapping.find((item) => item.id === id);
    return match ? match.label : "Unknown";
  };
  const categoryMapping = [
    { id: 1, label: "UI/UX Design" },
    { id: 2, label: "Product Management" },
    { id: 3, label: "Web Development" },
    { id: 4, label: "Android Development" },
    { id: 5, label: "IOS Development" },
    { id: 6, label: "Data Science" },
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
            {dataPayments.map((payment, index) => {
              const originalDate = new Date(payment.payment_date);
              const dateFormatter = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                timeZone: "UTC",
              });
              const formattedDate = dateFormatter.format(originalDate);

              const paymentStatus = payment.is_paid
                ? "Sudah Dibayar"
                : " Belum Dibayar";
              return (
                <tr key={index}>
                  <td>
                    <p>{payment.user_id}</p>
                  </td>
                  <td>
                    <p>
                      {getLabelById(payment.class.category_id, categoryMapping)}
                    </p>
                  </td>
                  <td>
                    <p>{payment.class.name}</p>
                  </td>
                  <td>
                    <p>{paymentStatus}</p>
                  </td>
                  <td>
                    <p>{payment.payment_method}</p>
                  </td>
                  <td>
                    <p>{formattedDate}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
