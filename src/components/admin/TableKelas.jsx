import React, { useCallback, useEffect, useState } from "react";
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
import { getClassByQuery } from "../../services/get-all-class";
import { editClassById } from "../../services/edit-class";
import { deleteClassById } from "../../services/delete-class";
import { useNavigate } from "react-router-dom";
import { FilterAdmin } from "../admin/FilterAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import filter from "../../assets/Filter.svg";
import { TambahKelas } from "../admin/TambahKelas";
import { toast } from "react-toastify";
import FormInput from "../form/FormInput";
import { FormSelect } from "../form/FormSelect";
const TABLE_HEAD = [
  "Kode Kelas",
  "Kategori",
  "Nama Kelas",
  "Tipe Kelas",
  "Level",
  "Harga Kelas",
  "Aksi",
];

export const TableKelas = () => {
  const [edit, setEdit] = useState(false);
  const [hapus, setHapus] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [dataTables, setDataTables] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openTambah, setOpenTambah] = useState(false);
  const [notFound, setNotFound] = useState(null);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);
  const show = () => {
    setOpen(!open);
  };
  const handleOpenTambah = () => setOpenTambah(!openTambah);
  const [formData, setFormData] = useState({
    class_image: null,
    name: "",
    code: "",
    price: "",
    goals: [],
    prerequisites: [],
    author: "",
    about: "",
    category_id: "1",
    type_id: "1",
    level_id: "1",
  });
  const navigate = useNavigate();

  const handleGetClass = useCallback(async () => {
    try {
      const response = await getClassByQuery(
        page,
        limit,
        search,
        category,
        type,
        level
      );

      if (response.data.data.classes.length === 0) {
        setDataTables([]);
        setNotFound("Kelas Tidak Ditemukan");
      } else {
        setDataTables(response.data.data.classes);
        setNotFound(null);
      }
    } catch (error) {
      setDataTables([]);
      setNotFound("Kelas Tidak Ditemukan");
    }
  }, [page, limit, search, category, type, level]);

  useEffect(() => {
    handleGetClass();
  }, [handleGetClass]);

  const handleSearch = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 1000);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

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
      class_image: null,
      name: row.name,
      code: row.code,
      price: row.price,
      author: row.author,
      about: row.about,
      goals: row.goals,
      prerequisites: row.prerequisites,
      category_id: row.category_id,
      type_id: row.type_id,
      level_id: row.level_id,
    });
  };
  const handleEditDialogClose = () => {
    setEdit(false);
    setSelectedRow(null);
    setFormData({
      class_image: null,
      name: "",
      code: "",
      price: 0,
      author: "",
      about: "",
      goals: [],
      prerequisites: [],
      category_id: "",
      type_id: "",
      level_id: "",
    });
  };

  const handlePrerequisitesChange = (e, index) => {
    const { value } = e.target;
    const updatedPrerequisites = [...formData.prerequisites];
    updatedPrerequisites[index] = value;
    setFormData({ ...formData, prerequisites: updatedPrerequisites });
  };

  const addPrerequisites = () => {
    setFormData({
      ...formData,
      prerequisites: [...formData.prerequisites, ""],
    });
  };
  const handleRemovePrerequisites = (index) => {
    const updatedPrerequisites = [...formData.prerequisites];
    updatedPrerequisites.splice(index, 1);
    setFormData({ ...formData, prerequisites: updatedPrerequisites });
  };
  const handleGoalsChange = (e, index) => {
    const { value } = e.target;
    const updatedGoals = [...formData.goals];
    updatedGoals[index] = value;
    setFormData({ ...formData, goals: updatedGoals });
  };

  const addGoals = () => {
    setFormData({ ...formData, goals: [...formData.goals, ""] });
  };
  const handleRemoveGoals = (index) => {
    const updatedGoals = [...formData.goals];
    updatedGoals.splice(index, 1);
    setFormData({ ...formData, goals: updatedGoals });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, class_image: event.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  const handleEditSubmit = async () => {
    const formEditData = new FormData();
    formEditData.append("goals", formData.goals);
    formEditData.append("prerequisites", formData.prerequisites);
    formEditData.append("class_image", formData.class_image);
    formEditData.append("name", formData.name);
    formEditData.append("code", formData.code);
    formEditData.append("price", formData.price);
    formEditData.append("author", formData.author);
    formEditData.append("about", formData.about);
    formEditData.append("category_id", formData.category_id);
    formEditData.append("type_id", formData.type_id);
    formEditData.append("level_id", formData.level_id);
    try {
      await editClassById(selectedRow.id, formEditData);
      handleGetClass();
      handleEditDialogClose();
      toast.success("Kelas Berhasil diubah !");
    } catch (error) {
      toast.error("Kelas gagal diubah !");
    }
  };
  const handleHapus = (row) => {
    setSelectedRow(row);
    setHapus(true);
  };
  const handleDeleteSubmit = async () => {
    try {
      await deleteClassById(selectedRow.id);
      setHapus(false);
      handleGetClass();
      toast.success("Kelas Berhasil dihapus");
    } catch (error) {
      setHapus(false);
      toast.error("Kelas gagal dihapus");
    }
  };
  return (
    <div className="font-montserrat">
      {/* Tambah KELAS */}
      <TambahKelas
        open={openTambah}
        handler={handleOpenTambah}
        getClass={handleGetClass}
      />
      {/* Tambah KELAS */}
      <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
        <h1 className="text-xl font-bold">Kelola Kelas</h1>
        <div className="flex flex-row gap-2 flex-wrap">
          <Button
            variant="filled"
            className="rounded-3xl h-10 w-28 flex items-center gap-2 normal-case pl-4 bg-blue-600"
            onClick={handleOpenTambah}
          >
            <FontAwesomeIcon
              icon={faPlus}
              size="sm"
              className="border-2 border-white rounded-full w-3 h-3 p-1"
            />
            <h1 className="text-sm">Tambah</h1>
          </Button>
          <Button
            variant="filled"
            className="rounded-3xl h-10 w-28 flex items-center gap-2 normal-case bg-blue-600"
            onClick={handleOpenFilter}
          >
            <img src={filter} alt="logo" />
            <h1 className="text-sm text-white">Filter</h1>
          </Button>
          <div className={`relative pb-2`}>
            <input
              type="text"
              className={`rounded-full px-4 border-2 border-blue-600 h-10 transition-all duration-500 w-0 focus:w-40 ${
                open ? "w-40 mobile:w-40 mobile:focus:w-40" : "w-10 mobile:w-10"
              }`}
              onChange={handleSearch}
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
      {/* Filter Admin */}
      <FilterAdmin
        open={openFilter}
        onClose={handleCloseFilter}
        category={category}
        type={type}
        level={level}
        handleCategory={(e) => setCategory(e.target.value)}
        handleType={(e) => setType(e.target.value)}
        handleLevel={(e) => setLevel(e.target.value)}
        getFilter={handleGetClass}
        setFilter={(filter) => {
          setPage(1);
          setCategory(filter.category || "");
          setType(filter.type || "");
          setLevel(filter.level || "");
        }}
      />
      {/* Filter Admin */}
      {/* UNTUK UBAH */}
      <Dialog open={edit} handler={handleEditDialogClose}>
        <DialogHeader className="justify-center">Edit Kelas</DialogHeader>

        <DialogBody className="overflow-y-scroll h-[60vh] mobile:h-[30rem] laptop:h-[30rem]">
          <div className="flex flex-col">
            <label htmlFor="class_image" className="py-2 text-xs">
              Upload Image
            </label>
            <input
              type="file"
              name="file"
              id="class_image"
              className="w-full h-12 rounded-xl py-1 px-5 file:pt-1 file:rounded-full border-2 file:w-24 file:border-none file:cursor-pointer file:bg-blue-600 file:text-white"
              onChange={handleFileChange}
            />
          </div>
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
          <div className="flex flex-col">
            <label htmlFor="goals" className="py-2 text-xs">
              Tujuan Kelas
            </label>
            {formData.goals.map((goal, index) => (
              <div key={index} className="flex flex-row pb-2 pt-1">
                <input
                  type="text"
                  id="goals"
                  value={goal}
                  placeholder="Tambahkan Tujuan Kelas"
                  onChange={(e) => handleGoalsChange(e, index)}
                  className="w-4/5 h-12 rounded-xl py-2 px-5 border-2"
                />
                <button
                  className="px-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                  onClick={() => handleRemoveGoals(index)}
                >
                  Hapus
                </button>
              </div>
            ))}
            <Button
              variant="gradient"
              color="green"
              className="rounded-lg"
              onClick={addGoals}
            >
              Tambahkan Tujuan Kelas
            </Button>
          </div>
          <div className="flex flex-col">
            <label htmlFor="prerequisites" className="py-2 text-xs">
              Prerequisites
            </label>
            {formData.prerequisites.map((prerequisites, index) => (
              <div key={index} className="flex flex-row pb-2 pt-1">
                <input
                  type="text"
                  id="prerequisites"
                  value={prerequisites}
                  placeholder="Tambahkan Prerequisites"
                  onChange={(e) => handlePrerequisitesChange(e, index)}
                  className="w-4/5 h-12 rounded-xl py-2 px-5 border-2"
                />
                <button
                  className="px-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                  onClick={() => handleRemovePrerequisites(index)}
                >
                  Hapus
                </button>
              </div>
            ))}
            <Button
              variant="gradient"
              color="green"
              className="rounded-lg"
              onClick={addPrerequisites}
            >
              Tambahkan Prerequisites
            </Button>
          </div>
          <FormSelect
            name="Kategori"
            label="category_id"
            options={kategoriOptions}
            selectedValue={formData.category_id}
            onChange={(e) => handleInputChange(e)}
          />
          <FormSelect
            name="Tipe Kelas"
            label="type_id"
            options={tipeKelas}
            selectedValue={formData.type_id}
            onChange={(e) => handleInputChange(e)}
          />
          <FormSelect
            name="Level"
            label="level_id"
            options={levelKesulitan}
            selectedValue={formData.level_id}
            onChange={(e) => handleInputChange(e)}
          />
        </DialogBody>
        <DialogFooter>
          <div className="flex flex-row gap-2 py-2">
            <Button
              variant="gradient"
              color="blue"
              onClick={() =>
                navigate(`/admin/kelola-kelas/chapters/${selectedRow.id}`)
              }
              className="mr-1"
            >
              <span>Chapter Kelas</span>
            </Button>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => navigate(`/admin/kelola-kelas/${selectedRow.id}`)}
              className="mr-1"
            >
              <span>Tambah Chapter</span>
            </Button>
          </div>
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
                    className="font-poppins leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataTables?.length === 0 ? (
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <h1 className="text-lg uppercase">{notFound}</h1>
                </td>
              </tr>
            ) : (
              dataTables?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
                      >
                        {data.code}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
                      >
                        {getLabelById(data.category_id, categoryMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
                      >
                        {data.name}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
                      >
                        {getLabelById(data.type_id, typeMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
                      >
                        {getLabelById(data.level_id, levelMapping)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-montserrat"
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
              })
            )}
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
