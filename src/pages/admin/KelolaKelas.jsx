import React, { useState } from "react";
import { CardAdmin } from "../../components/CardAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableAdmin } from "../../components/TableAdmin";
import { SideBarAdmin } from "../../components/SideBarAdmin";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import filter from "../../assets/Filter.svg";
import logoUsers from "../../assets/Users.svg";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import FormInput from "../../components/form/FormInput";
import { FormSelect } from "../../components/form/FormSelect";
import { postClass } from "../../services/create-class";
import { toast } from "react-toastify";
import { ReactTables } from "../../components/ReactTables";
import { TambahKelas } from "../../components/TambahKelas";
import { FilterAdmin } from "../../components/FilterAdmin";
import { CardAdminApi } from "../../components/CardAdminApi";
export const KelolaKelas = () => {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openTambah, setOpenTambah] = useState(false);
  // const [open, setOpen] = useState(false)
  // const openDrawer = () => setOpen(true);
  const handleOpenFilter = () => setOpenFilter(true);
  const handleCloseFilter = () => setOpenFilter(false);
  // const closeDrawer = () => setOpen(false);
  // const [formKelas, setFormKelas] = useState({
  //   class_image: null,
  //   name: "",
  //   code: "",
  //   price: "",
  //   author: "",
  //   about: "",
  //   category_id: "1",
  //   type_id: "1",
  //   level_id: "1",
  // });


  // const handleInputFile = (e) => {
  //   setFormKelas({ ...formKelas, class_image: e.target.files[0] });
  // };

  // const handleParseIntChange = (e) => {
  //   setFormKelas({ ...formKelas, price: parseInt(e.target.value, 10) });
  // };

  //TODO
  // const handleInputParseIntChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormKelas({
  //     ...formKelas,
  //     [id]: parseInt(value, 10),
  //   });
  //   console.log(e.target.value, formKelas, "ini isinya");
  // };
  //TODO
  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormKelas({
  //     ...formKelas,
  //     [id]: value,
  //   });
  //   console.log(e.target.value, formKelas, "ini isinya");
  // };

  const show = () => {
    setOpen(!open);
  };
  const handleOpenTambah = () => setOpenTambah(!openTambah);
  // const kategoriOptions = [
  //   { label: "UI/UX Design", value: "1" },
  //   { label: "Product Management", value: "2" },
  //   { label: "Web Development", value: "3" },
  //   { label: "Android Development", value: "4" },
  //   { label: "IOS Development", value: "5" },
  //   { label: "Data Science", value: "6" },
  // ];
  // const tipeKelas = [
  //   { label: "Gratis", value: 1 },
  //   { label: "Premium", value: 2 },
  // ];
  // const levelKesulitan = [
  //   { label: "Beginner", value: 1 },
  //   { label: "Intermediate", value: 2 },
  //   { label: "Advanced", value: 3 },
  // ];

  // const handleCreateClass = async () => {
  //   const tambahKelas = {
  //     class_image: formKelas.class_image,
  //     name: formKelas.name,
  //     code: formKelas.code,
  //     price: formKelas.price,
  //     author: formKelas.author,
  //     about: formKelas.about,
  //     category_id: formKelas.category_id,
  //     type_id: formKelas.type_id,
  //     level_id: formKelas.level_id,
  //   };
  //   try {
  //     const response = await postClass(tambahKelas);
  //     console.log(postClass);
  //     setOpenTambah(false);
  //     toast.success("sukses");
  //     console.log(response.data.message, "ini response");
  //   } catch (error) {
  //     toast.error(error);
  //     setOpenTambah(false);
  //     console.error(error);
  //   }
  // };
  // console.log(open);
  return (
    <div>
      {/* //!FORM INPUT KELAS */}
      {/* <TambahKelas open={openTambah} handler={handleOpenTambah}/> */}
      {/* <Dialog open={openTambah} handler={handleOpenTambah}>
        <DialogHeader className="justify-center">Tambah Kelas</DialogHeader>

        <DialogBody className="overflow-y-scroll h-[30rem]">
          <FormInput
            name="Nama Kelas"
            label="name"
            type="text"
            placeholder="Nama Kelas"
            value={formKelas.name}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Kode Kelas"
            label="code"
            type="text"
            placeholder="Kode Kelas"
            value={formKelas.code}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Harga Kelas"
            label="price"
            type="number"
            placeholder="Harga Kelas"
            value={formKelas.price}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            name="Author"
            label="author"
            type="text"
            placeholder="author"
            value={formKelas.author}
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
              value={formKelas.about}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <FormSelect
            label="category_id"
            name="Kategori"
            options={kategoriOptions}
            onchange={(e) => handleInputParseIntChange(e)}
          />
          <FormSelect
            name="Tipe Kelas"
            label="type_id"
            options={tipeKelas}
            onchange={(e) => handleInputParseIntChange(e)}
          />
          <FormSelect
            name="Level"
            label="level_id"
            options={levelKesulitan}
            onchange={(e) => handleInputParseIntChange(e)}
          />
          <div className="flex flex-col">
            <label
              htmlFor="
            class_image"
              className="py-2 text-xs"
            >
              Upload Image
            </label>
            <input
              id="class_image"
              type="file"
              name="file"
              className="w-full h-12 rounded-xl py-1 px-5 file:pt-1 file:rounded-full border-2 file:w-24 file:border-gray-800 file:bg-blue-600 file:text-white"
              onChange={handleInputFile}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenTambah}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            className="rounded-2xl"
            type="submit"
            onClick={() => {
              handleCreateClass();
            }}
          >
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
      {/* //! FORM INPUT KELAS */}
      <div className="flex">
        <div className="laptop:w-[20%] overflow-hidden laptop:block hidden ">
          <SideBarAdmin />
        </div>
        <div className="flex-1 w-10">
          <NavbarAdmin />
          {/* //! Card */}
          <div className="py-2">
            <div className="">
             <CardAdminApi/>
            </div>
          </div>
          {/* //!EndCard */}
          {/* Table */}
          <div className="container mx-auto w-10/12 pb-4">
            {/* <div className="flex flex-row justify-between pb-2 items-center flex-wrap">
              <h1 className="text-xl font-bold">Kelola Kelas</h1>
              <div className="flex flex-row gap-2">
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
                  variant="outlined"
                  className="rounded-3xl border-blue-600 h-10 w-28 flex items-center gap-2 normal-case hover:bg-purple-600"
                  onClick={handleOpenFilter}
                >
                  <img src={filter} alt="logo" />
                  <h1 className="text-sm text-blue-600">Filter</h1>
                </Button>
                <div className={`relative pb-2`}>
                  <input
                    type="text"
                    className={`rounded-full px-4 border-2 border-[#6148FF] h-10 transition-all duration-500 w-0 focus:w-40 ${
                      open
                        ? "w-40 mobile:w-40 mobile:focus:w-40"
                        : "w-10 mobile:w-10"
                    }`}
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
            </div> */}
            <ReactTables />
          </div>
          {/* End Table */}
          {/* <FilterAdmin open={openFilter} onClose={handleCloseFilter}/> */}
        </div>
      </div>
    </div>
  );
};
