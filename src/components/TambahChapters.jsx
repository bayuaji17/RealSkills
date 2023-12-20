import React, { useState } from "react";
import FormInput from "./form/FormInput";

export const TambahChapters = ({ classId }) => {
  const [chapterData, setChapterData] = useState({
    title: "",
    videos: [
      {
        title: "",
        link: "",
        time: 0,
      },
    ],
    class_id: classId,
  });

  return (
    <div>
      <form action="">
        <FormInput
          label="title"
          type="text"
          placeholder="Masukan Title Chapter"
          name="Chapter"
        />
      </form>
    </div>
  );
};
