import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardFooter,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { getClass } from "../services/get-all-class";
import { FormSelect } from "./form/FormSelect";
import FormInput from "./form/FormInput";
import { editClassById } from "../services/edit-class";
import { deleteClassById } from "../services/delete-class";
import { useNavigate } from "react-router-dom";
const TABLE_HEAD = [
  "Kode Kelas",
  "Kategori",
  "Nama Kelas",
  "Tipe Kelas",
  "Level",
  "Harga Kelas",
  "Aksi",
];

export const ReactTables = () => {
  const [edit, setEdit] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [dataTables, setDataTables] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0,
    author: "",
    about: "",
    category_id: 1,
    type_id: 1,
    level_id: 1,
  });
  const navigate = useNavigate();
  const handleGetClass = async () => {
    try {
      const response = await getClass(page, limit);
      setDataTables(response.data.data.classes);
      console.log(response.data.data.classes, "dari ReactTables");
    } catch (error) {
      console.error(error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    handleGetClass();
  }, [page]);

  const getLabelById = (id, mapping) => {
    const match = mapping.find((item) => item.id === id);
    return match ? match.label : "Unknown";
  };

  const typeMapping = [
    { id: 1, label: "GRATIS" },
    { id: 2, label: "PREMIUM" },
  ];
  const levelMapping = [
    { id: 1, label: "Beginner" },
    { id: 2, label: "Intermediate" },
    { id: 3, label: "Advanced" },
  ];
  const categoryMapping = [
    { id: 1, label: "UI/UX Design" },
    { id: 2, label: "Product Management" },
    { id: 3, label: "Web Development" },
    { id: 4, label: "Android Development" },
    { id: 5, label: "IOS Development" },
    { id: 6, label: "Data Science" },
  ];
  const kategoriOptions = [
    { label: "UI/UX Design", value: 1 },
    { label: "Product Management", value: 2 },
    { label: "Web Development", value: 3 },
    { label: "Android Development", value: 4 },
    { label: "IOS Development", value: 5 },
    { label: "Data Science", value: 6 },
  ];
  const tipeKelas = [
    { label: "Gratis", value: 1 },
    { label: "Premium", value: 2 },
  ];
  const levelKesulitan = [
    { label: "Beginner", value: 1 },
    { label: "Intermediate", value: 2 },
    { label: "Advanced", value: 3 },
  ];

  const handleEdit = (row) => {
    setEdit(true);
    setSelectedRow(row);
    setFormData({
      name: row.name,
      code: row.code,
      price: row.price,
      author: row.author,
      about: row.about,
      category_id: row.category_id,
      type_id: row.type_id,
      level_id: row.level_id,
    });
  };
  const handleEditDialogClose = () => {
    setEdit(false);
    setSelectedRow(null);
    setFormData({
      name: "",
      code: "",
      price: 0,
      author: "",
      about: "",
      category_id: "",
      type_id: "",
      level_id: "",
    });
  };

  const handleInputParseIntChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: parseInt(value, 10),
    });
    console.log(e.target.value, formData, "ini isinyahandleINPUT");
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    console.log(e.target.value, formData, "ini isinya");
  };
  const handleEditSubmit = async () => {
    try {
      await editClassById(selectedRow.id, formData);
      handleGetClass();
      handleEditDialogClose();
    } catch (error) {
      console.error(error);
    }
  };
  const handleHapus = (row) => {
    setSelectedRow(row);
    setHapus(true);
  };
  const handleDeleteSubmit = async () => {
    try {
      await deleteClassById(selectedRow.id);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {/* UNTUK UBAH */}

      <Dialog open={edit} handler={handleEditDialogClose}>
        <DialogHeader className="justify-center">Edit Kelas</DialogHeader>

        <DialogBody className="overflow-y-scroll h-[30rem]">
          <FormInput
            name="Nama Kelas"
            label="name"
            type="text"
            placeholder="Nama Kelas"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Kode Kelas"
            label="code"
            type="text"
            placeholder="Kode Kelas"
            value={formData.code}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Harga Kelas"
            label="price"
            type="number"
            placeholder="Harga Kelas"
            value={formData.price}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Author"
            label="author"
            type="text"
            placeholder="author"
            value={formData.author}
            onChange={(e) => handleInputChange(e)}
          />
          <div className="flex flex-col">
            <label htmlFor="materi" className="text-xs py-2">
              Materi
            </label>
            <textarea
              name="Materi"
              id="about"
              cols="40"
              rows="4"
              className="border-2 rounded-2xl px-4"
              value={formData.about}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <FormSelect
            name="Kategori"
            label="category_id"
            options={kategoriOptions}
            onChange={(e) => handleInputParseIntChange(e)}
          />
          <FormSelect
            name="Tipe Kelas"
            label="type_id"
            options={tipeKelas}
            onChange={(e) => handleInputParseIntChange(e)}
          />
          <FormSelect
            name="Level"
            label="level_id"
            options={levelKesulitan}
            onChange={(e) => handleInputParseIntChange(e)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="blue"
            onClick={()=>navigate(`/admin/kelola-kelas/${selectedRow.id}`)}
            className="mr-1"
          >
            <span>Tambah Chapter</span>
          </Button>
          <Button
            variant="text"
            color="red"
            onClick={handleEditDialogClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            className="rounded-2xl"
            type="submit"
            onClick={handleEditSubmit}
          >
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //! END UNTUK UBAH */}
      {/* //!UNTUK HAPUS */}
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
      {/* //!UNTUK HAPUS */}
      {/* Table */}
      <Card className="h-80 w-full overflow-y-scroll">
        <table className="w-full min-w-max table-auto text-left ">
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
            {dataTables.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.code}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {getLabelById(data.category_id, categoryMapping)}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.name}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {getLabelById(data.type_id, typeMapping)}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {getLabelById(data.level_id, levelMapping)}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.price}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex flex-row gap-1">
                      <Button
                        size="sm"
                        className="normal-case rounded-2xl bg-blue-600"
                        onClick={() => handleEdit(data)}
                      >
                        Ubah
                      </Button>
                      <Button
                        size="sm"
                        className="normal-case rounded-2xl bg-red-600"
                        onClick={() => handleHapus(data)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CardFooter className="flex items-center laptop:justify-end gap-2 border-t border-blue-gray-50 p-4">
          <Button
            variant="gradient"
            size="sm"
            color="green"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="gradient"
            size="sm"
            color="green"
            onClick={handleNextPage}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
