import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="container mx-auto flex justify-around ">
      <div className="w-full flex flex-col justify-start ">
        <input
          className=" px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
        />
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />;
        </div>
      </div>

      <div className="">
        <div className="ml-5">
          <div className="flex flex-col p-5 gap-5 text-start border-2 border-gray-200">
            <h1>Publish</h1>
            <span>
            <b>Status: </b>
              Draft
            </span>
            
            <span>
            <b>Visibility: </b>
              Public
            </span>
            <div>
              <h3>Image</h3>
              <input type="file" id="img" name="img" accept="image/*"></input>
            </div>
          </div>
        </div>
        <div>item2</div>
      </div>
    </div>
  );
};
