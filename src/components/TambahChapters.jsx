import React, { useState } from "react";
import FormInput from "./form/FormInput";
import { useLocation } from "react-router-dom";
import { Button, Card } from "@material-tailwind/react";
import { postChapters } from "../services/create-chapters";
import { toast } from "react-toastify";
//  *DONE
//TODO BLOM RAPIH
export const TambahChapters = () => {
  const location = useLocation();
  const classId = location.pathname.split("/")[3];
  const [chapterData, setChapterData] = useState({
    no_chapter: "",
    title: "",
    videos: [
      {
        noVideo: "",
        titleVideo: "",
        linkVideo: "",
        timeVideo: "",
      },
    ],
    class_id: classId,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setChapterData({ ...chapterData, [id]: value });

    console.log(e.target.value, chapterData);
  };
  // const handleInputParseIntChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormKelas({
  //     ...formKelas,
  //     [id]: parseInt(value, 10),
  //   });
  //   console.log(e.target.value, formKelas, "ini isinyahandleINPUT");
  //   console.log(e.target.files, formKelas, "ini file");
  // };
  const handleParseIntInput = (e) => {
    const { id, value } = e.target;
    setChapterData({ ...chapterData, [id]: parseInt(value, 10) });
  };

  const handleVideoChange = (e, field, index) => {
    const updatedVideos = [...chapterData.videos];
    updatedVideos[index][field] = e.target.value;
    setChapterData({ ...chapterData, videos: updatedVideos });
    console.log(chapterData);
  };
  const handleParseIntVideoChange = (e, field, index) => {
    const updatedVideos = [...chapterData.videos];
    updatedVideos[index][field] = parseInt(e.target.value, 10);
    setChapterData({ ...chapterData, videos: updatedVideos });
    console.log(chapterData);
  };
  const handleAddVideo = () => {
    setChapterData({
      ...chapterData,
      videos: [
        ...chapterData.videos,
        { noVideo: "", titleVideo: "", timeVideo: "" },
      ],
    });
  };

  const handleRemoveVideo = (index) => {
    const removeVideo = [...chapterData.videos];
    removeVideo.splice(index, 1);
    setChapterData({ ...chapterData, videos: removeVideo });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formSubmit = {
      no_chapter: chapterData.no_chapter,
      title: chapterData.title,
      videos: chapterData.videos.map((video) => ({
        no_video: video.noVideo,
        title: video.titleVideo,
        link: video.linkVideo,
        time: video.timeVideo,
      })),
      class_id: chapterData.class_id,
    };
    try {
      const response = await postChapters(formSubmit);
      console.log(response);
      toast.success("success");

      // return response;
    } catch (error) {
      toast.error("error");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto w-screen ">
      <h1>Input Chapter</h1>

      <Card className="w-full p-3 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
        <form onSubmit={handleSubmit}>
          <label htmlFor="no_chapter" className="">
            Nomor Chapter
            <FormInput
              label="no_chapter"
              type="number"
              placeholder="Input No Chapter"
              value={chapterData.no_chapter}
              onChange={(e) => handleParseIntInput(e)}
            />
          </label>
          <label htmlFor="title">
            Tittle Chapter
            <FormInput
              label="title"
              type="text"
              placeholder="Input Title Chapter"
              value={chapterData.title}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <div className="flex flex-row flex-wrap justify-center gap-y-3 gap-x-6 py-2">
            {chapterData.videos.map((video, index) => (
              <Card className="w-[38rem] my-2 p-3 ">
                <div key={index}>
                  <div className="flex flex-row items-center justify-between">
                    <h1>Data Video Ke : {index + 1}</h1>
                    <Button
                      variant="gradient"
                      color="red"
                      onClick={handleRemoveVideo}
                    >
                      Hapus Chapter
                    </Button>
                  </div>
                  <FormInput
                    name="Nomor Video"
                    label="noVideo"
                    type="number"
                    value={video.noVideo}
                    onChange={(e) =>
                      handleParseIntVideoChange(e, "noVideo", index)
                    }
                    placeholder="Input Nomor Video"
                  />
                  <FormInput
                    name="Judul Video"
                    label="judulVideo"
                    type="text"
                    value={video.titleVideo}
                    onChange={(e) => handleVideoChange(e, "titleVideo", index)}
                    placeholder="Input Judul Video"
                  />
                  <FormInput
                    name="Durasi Video"
                    label="time"
                    type="number"
                    value={video.timeVideo}
                    onChange={(e) =>
                      handleParseIntVideoChange(e, "timeVideo", index)
                    }
                    placeholder="Input Durasi video"
                  />
                  <FormInput
                    name="Link Video"
                    label="link"
                    type="text"
                    value={video.linkVideo}
                    onChange={(e) => handleVideoChange(e, "linkVideo", index)}
                    placeholder="Input Link Video"
                  />
                </div>
              </Card>
            ))}
          </div>
          {/* {chapterData.videos.map((video, index) => (
          <div key={index}>
            <FormInput
              name="Judul Video"
              label="videosTittle"
              type="text"
              placeholder="Judul Video"
              value={video.title}
              onChange={(e) => handleInputChange(e, index)}
            />
            <FormInput
              name="Link Video"
              label="videosLink"
              type="text"
              placeholder="Link Video"
              value={video.link}
              onChange={(e) => handleInputChange(e, index)}
            />
            <FormInput
              name="Durasi Video"
              label="videosTime"
              type="number"
              placeholder="Durasi Video"
              value={video.time}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))} */}
          <div className="flex justify-between">
            <Button variant="gradient" onClick={handleAddVideo}>
              Tambah Video
            </Button>
            <Button variant="gradient" type="submit">
              Submit Chapter
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
