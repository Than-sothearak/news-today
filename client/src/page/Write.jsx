import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const category = [
    { id: 1, value: "art", name: "Art" },
    { id: 2, value: "technology", name: "Technology" },
    { id: 3, value: "cinema", name: "Cinema" },
    { id: 4, value: "design", name: "Design" },
  ];
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="mt-10 px-5 container mx-auto flex flex-wrap justify-around ">
      <div className=" sm:w-3/5 md:w-2/4 lg:w-3/5 flex flex-col justify-start ">
        <input
          className=" px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
        />
        <div>
          <ReactQuill
            className="h-56"
            theme="snow"
            value={value}
            onChange={setValue}
          />
          ;
        </div>
      </div>

      <div className="lg:w-1/3 flex flex-col flex-wrap p-0">
        <div className="mt-14 md:mt-0 lg:mt-0">
          <div className="flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
            <h1 className="text-3xl font-bold">Publish</h1>
            <span>
              <b>Status: </b>
              Draft
            </span>

            <span>
              <b>Visibility: </b>
              Public
            </span>
            <div>
              <h3>Upload Image</h3>
              <input type="file" id="img" name="img" accept="image/*"></input>
            </div>
            <div className="flex gap-3 justify-between pt-2">
              <button className="bg-blue-500 text-white">Save as draft</button>
              <button className="bg-blue-500 text-white">Update</button>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-3 md:mt-1.5 lg:mt-4 flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
          <h1 className="text-3xl font-bold">Category</h1>
          {category.map((category) => (
            <div key={category.id}className="flex gap-2">
              <input
                type="radio"
                name="category"
                value={category.value}
                id={category.value}
              />
              <label htmlFor={category.value}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
