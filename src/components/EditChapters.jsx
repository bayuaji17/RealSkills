import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import FormInput from "./form/FormInput";
import { editChaptersById } from "../services/edit-chapters";

//! Masih NGEBUG


export const EditChapters = ({ open, handleOpen, editChaptersId }) => {

  const [editChapters, setEditChapters] = useState({
    no_chapter: undefined,
    title: undefined,
    videos: [
      {
        no_video: "",
        title: "",
        link: "",
        time: "",
      },
    ],
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEditChapters({ ...editChapters, [id]: value });
  };

  const handleVideoChange = (e, index, field) => {
    const { value } = e.target;
    const updatedVideos = [...editChapters.videos];
    updatedVideos[index][field] = value;
    setEditChapters({ ...editChapters, videos: updatedVideos });
    console.log(editChapters, e.target.value);
  };

  const addVideo = () => {
    setEditChapters({
      ...editChapters,
      videos: [
        ...editChapters.videos,
        { no_video: "", title: "", link: "", time: "" },
      ],
    });
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = [...editChapters.videos];
    updatedVideos.splice(index, 1);
    setEditChapters({ ...editChapters, videos: updatedVideos });
  };

  const handleSubmit = async () => {
    const dataEditSubmit = {
      no_chapter: editChapters.no_chapter,
      title: editChapters.title,
      videos: editChapters.videos.map((video) => ({
        no_video: video.no_video,
        title: video.title,
        link: video.link,
        time: video.time,
      })),
    };
    try {
      const response = await editChaptersById(editChaptersId,dataEditSubmit);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-y-scroll h-4/5"
      >
        <DialogHeader>Edit Chapter.</DialogHeader>
        <DialogBody>
          <FormInput
            label="no_chapter"
            type="number"
            placeholder="No Chapter"
            name="No Chapter"
            value={editChapters.no_chapter || ""}
            onChange={(e) => handleInputChange(e)}
          />
          <FormInput
            label="title"
            type="text"
            placeholder="Input Title Chapter"
            name="Title Chapter"
            value={editChapters.title || ""}
            onChange={(e) => handleInputChange(e)}
          />
          {editChapters.videos.map((videos, index) => (
            <div key={index}>
              <Card className="h-96 bg-red-200 my-4">
                <div className="w-[30rem] px-4">
                  <FormInput
                    type="text"
                    id="goals"
                    name="Nomor Video"
                    value={videos.no_video}
                    placeholder="Input No Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "no_video")}
                  />
                  <FormInput
                    type="text"
                    id="goals"
                    name="Title Video"
                    value={videos.title}
                    placeholder="Input Title Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "title")}
                  />
                  <FormInput
                    type="text"
                    id="goals"
                    name="Link Video"
                    value={videos.link}
                    placeholder="Input Link Video Chapter"
                    onChange={(e) => handleVideoChange(e, index, "link")}
                  />
                  <FormInput
                    type="text"
                    id="goals"
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
          <Button onClick={addVideo} className="w-full">
            Tambah Video
          </Button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
