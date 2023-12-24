import { Button, Card, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getClassById } from "../services/get-all-class";
import { useParams } from "react-router-dom";
import { EditChapters } from "./EditChapters";

//!Masih Ngebug
export const ChaptersTables = () => {
  const [dataChapters, setDataChapters] = useState([]);
  const [editChaptersId, setEditChaptersId] = useState(null);
  const [edit, setEdit] = useState(false);
  const handleEdit = (id) => {
    setEditChaptersId(id);
    setEdit(true);
  };
  // const handleOpen = () => setOpen(!open);
  const TABLE_HEAD = ["Nomor Chapter", "Title Chapter", "Jumlah Modul", ""];
  const { id } = useParams();

  const getClasById = async () => {
    try {
      const response = await getClassById(id);
      setDataChapters(response.data.data.chapters);
      console.log(response.data.data.chapters);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClasById();
  }, []);

  return (
    <div>
      <EditChapters open={edit} handleOpen={handleEdit} editChaptersId={editChaptersId} />
      <h1 className="text-center">Data Chapters</h1>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
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
            {dataChapters.map((chapters, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    {chapters.no_chapter}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {chapters.title}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {chapters.videos.length}
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex flex-row gap-2">
                      <Button
                        size="sm"
                        className="normal-case rounded-2xl bg-blue-600"
                        onClick={() => handleEdit(chapters.id)}
                      >
                        Ubah
                      </Button>
                      <Button>Hapus</Button>
                    </div>
                  </td>
                </tr>
              );
            })}

            {/* {TABLE_ROWS.map(({ name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button>Edit</Button>
                    <Button>Hapus</Button>
                  </td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
