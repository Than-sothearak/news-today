import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="container mx-auto flex justify-around ">
      <div className="w-3/4 flex flex-col justify-start ">
        <input
          className="w-80 px-2 border-2 border-gray-600 mb-5"
          type="text"
          placeholder="Title"
        />
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>

      <div className="flex flex-col">
        <div className="ml-5">
          <div className="flex flex-col">
            <h1>Publish</h1>
            <p>
              <b>Status</b>
            </p>
            <span>
              Draft<b>Visibility:</b>
            </span>
            <p>PublicUpload</p>
            <div>
              <h3>Image</h3>
            </div>
          </div>
        </div>
        <div>item2</div>
      </div>
    </div>
  );
};
