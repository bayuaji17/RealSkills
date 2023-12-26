import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { getClassById } from "../../services/get-all-class";
import { useParams } from "react-router-dom";
import { EditChapters } from "../EditChapters";
import FormInput from "../form/FormInput";
import { editChaptersById } from "../../services/edit-chapters";
import { deleteChaptersById } from "../../services/delete-chapters";
import { toast } from "react-toastify";

export const ChaptersTables = () => {
  const [dataChapters, setDataChapters] = useState([]);
  const [editChaptersId, setEditChaptersId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editVideo, setEditVideo] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState(null);
  const [hapus, setHapus] = useState(false);

  const [editChapters, setEditChapters] = useState({
    no_chapter: "",
    title: "",
    videos: [
      {
        no_video: "",
        titleVideo: "",
        link: "",
        time: "",
      },
    ],
  });

  // *EDIT Video
  const editVideoClose = () => {
    setEditVideo(false);
  };
  const handleEditVideo = () => {
    setEditVideo(true);
  
  };
  // *EDIT Video

  // ! UNTUK EDIT
  // *Untuk Input chapter
  const handleInputParseIntChange = (e) => {
    const { id, value } = e.target;
    setEditChapters({ ...editChapters, [id]: parseInt(value, 10) });
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditChapters({ ...editChapters, [id]: value });
  };
  //*Untuk Input video chapter
  const handleVideoChange = (e, index, field) => {
    const { value } = e.target;
    const updatedVideos = [...editChapters.videos];

    if (field === "time" || field === "no_video") {
      updatedVideos[index][field] = parseInt(value, 10) || 0;
    } else {
      updatedVideos[index][field] = value;
    }
    setEditChapters({ ...editChapters, videos: updatedVideos });
    console.log(editChapters, e.target.value);
  };
  // *Untuk add video chapter
  const addVideo = () => {
    setEditChapters({
      ...editChapters,
      videos: [
        ...editChapters.videos,
        { no_video: "", title: "", link: "", time: "" },
      ],
    });
  };
  //*Untuk remove video chapters
  const handleRemoveVideo = (index) => {
    const updatedVideos = [...editChapters.videos];
    updatedVideos.splice(index, 1);
    setEditChapters({ ...editChapters, videos: updatedVideos });
  };


  const handleEdit = (id, card) => {
    setEditChaptersId(id);
    setEdit(true);
    setSelectedChapters(card);
    setEditChapters({
      no_chapter: card.no_chapter,
      title: card.title,
      videos: [
        {
          no_video: "",
          titleVideo: "",
          link: "",
          time: "",
        },
      ],
    });
  };

  const EditChaptersClose = () => {
    setEdit(false);
    setSelectedChapters(null);
    setEditChapters({
      no_chapter: "",
      title: "",
      videos: [
        {
          no_video: "",
          titleVideo: "",
          link: "",
          time: "",
        },
      ],
    });
  };
  const handleHapus = (card) => {
    setSelectedChapters(card);
    setHapus(true);
  };
  const handleSubmit = async () => {
    let dataEditSubmit;

    if (
      editChapters.videos.some((video) =>
        Object.values(video).some((value) => value !== "")
      )
    ) {
      dataEditSubmit = {
        no_chapter: editChapters.no_chapter,
        title: editChapters.title,
        videos: editChapters.videos.map((video) => ({
          no_video: video.no_video,
          title: video.titleVideo,
          link: video.link,
          time: video.time,
        })),
      };
    } else {
      dataEditSubmit = {
        no_chapter: editChapters.no_chapter,
        title: editChapters.title,
      };
    }
    try {
      const response = await editChaptersById(editChaptersId, dataEditSubmit);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteChapterSubmit = async () => {
    try {
      await deleteChaptersById(selectedChapters.id);
      setHapus(false)
      toast.success("kelas Berhasil dihapus")
      getClasById()
    } catch (error) {
      console.error(error);
    }
  };

  console.log(editChapters, "dari chaptersTable.jsx");

  // ! UNTUK EDIT
  // *UNTUK GET
  const TABLE_HEAD_VIDEO = [
    "Nomor Video",
    "Title Video",
    "Link",
    "Durasi",
    "Aksi",
  ];
  const { id } = useParams();

  const getClasById = async () => {
    try {
      const response = await getClassById(id);
      setDataChapters(response.data.data.chapters);
      console.log(response.data.data.chapters, "dari chaptersTable");
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClasById();
  }, []);
  // *UNTUK GET
  return (
    <div className="bg-blue-gray-200">
      {/* //! EDIT Video */}
      <Dialog
        open={editVideo}
        handler={editVideoClose}
        className="overflow-y-scroll h-4/5"
      >
        <DialogHeader>Edit Video</DialogHeader>
        <DialogBody>
          <FormInput
            label="title"
            type="number"
            placeholder="Judul Video"
            name="Title Video"
            value={editChapters.no_chapter}
            onChange={(e) => handleInputParseIntChange(e)}
          />
          <FormInput
            label="link"
            type="text"
            placeholder="Link Video"
            name="Link Video"
            value={editChapters.title}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            label="time"
            type="text"
            placeholder="Durasi Video"
            name="Durasi Video"
            value={editChapters.title}
            onChange={(e) => handleInputChange(e)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            className="mr-1"
            onClick={editVideoClose}
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //! EDIT Video */}
      {/* //!Edit Chapter */}
      <Dialog
        open={edit}
        handler={EditChaptersClose}
        className="overflow-y-scroll h-4/5"
      >
        <DialogHeader>Edit Chapter.</DialogHeader>
        <DialogBody>
          <FormInput
            label="no_chapter"
            type="number"
            placeholder="No Chapter"
            name="No Chapter"
            value={editChapters.no_chapter}
            onChange={(e) => handleInputParseIntChange(e)}
          />
          <FormInput
            label="title"
            type="text"
            placeholder="Input Title Chapter"
            name="Title Chapter"
            value={editChapters.title}
            onChange={(e) => handleInputChange(e)}
          />
          {editChapters.videos.map((videos, index) => (
            <div key={index}>
              <Card className="h-96 bg-red-200 my-4">
                <div className="w-[30rem] px-4">
                  <FormInput
                    type="text"
                    label="no_video"
                    name="Nomor Video"
                    value={videos.no_video}
                    placeholder="Input No Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "no_video")}
                  />
                  <FormInput
                    type="text"
                    label="titleVideo"
                    name="Title Video"
                    value={videos.titleVideo}
                    placeholder="Input Title Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "titleVideo")}
                  />
                  <FormInput
                    type="text"
                    label="link"
                    name="Link Video"
                    value={videos.link}
                    placeholder="Input Link Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "link")}
                  />
                  <FormInput
                    type="text"
                    label="link"
                    name="Durasi Video"
                    value={videos.time}
                    placeholder="Input No Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "time")}
                  />
                </div>
                <button
                  className="px-2 my-2 border-2 bg-red-600 rounded-xl mx-4 w-24 h-12 text-white"
                  onClick={() => handleRemoveVideo(index)}
                >
                  Hapus
                </button>
              </Card>
            </div>
          ))}
          <Button className="w-full" onClick={addVideo}>
            Tambah Video
          </Button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            className="mr-1"
            onClick={() => setEdit(false)}
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //!Edit Chapter */}
      {/* //!Untuk Hapus */}
      <Dialog open={hapus} handler={() => setHapus(false)}>
        <DialogHeader>Anda yakin ingin mengapus chapter ini ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setHapus(false)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleDeleteChapterSubmit}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* //!Untuk Hapus */}
      <h1 className="text-center">Data Chapters</h1>
      <a href="/admin/kelola-kelas">BACK</a>
      <div className="flex flex-row flex-wrap gap-4 container justify-center">
        {dataChapters.map((chapters, index) => {
          return (
            <div key={index}>
              <Card className="w-[80rem] h-[30rem] bg-blue-gray-700 my-4 overflow-scroll">
                <CardBody>
                  {/* <h1 className="text-white">Chapter {index + 1}</h1> */}
                  <div className="text-white ">
                    <tr>
                      <td>Nomor Chapter</td>
                      <td> :</td>
                      <td>{chapters.no_chapter}</td>
                    </tr>
                    <tr>
                      <td>Title Chapter</td>
                      <td> :</td>
                      <td>{chapters.title}</td>
                    </tr>
                    <tr>
                      <td>Jumlah Video</td>
                      <td> :</td>
                      <td>{chapters.videos.length}</td>
                    </tr>
                    <div className="flex flex-row gap-2 justify-between items-center my-2">
                      <h1 className="text-lg font-semibold">
                        List Video Chapter
                      </h1>
                      <div className="flex gap-2">
                        <Button
                          color="green"
                          onClick={() => handleEdit(chapters.id, chapters)}
                        >
                          Ubah
                        </Button>
                        <Button
                          color="red"
                          onClick={() => handleHapus(chapters)}
                        >
                          Hapus
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <Card className="h-[15rem] w-[90%] overflow-scroll mx-auto">
                  <table className="w-full container mx-auto min-w-max table-auto text-left">
                    <thead>
                      <tr>
                        {TABLE_HEAD_VIDEO.map((head) => (
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
                      {chapters.videos.map((videos, index) => {
                        return (
                          <tr key={index}>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.no_video}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.title}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              {videos.link}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50 after:content-['Menit'] after:ml-1">
                              {videos.time}
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div className="flex gap-2">
                                <Button onClick={handleEditVideo}>Edit</Button>
                                <Button onClick={editVideoClose}>Hapus</Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
