import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {

  const [getMoreCategory, setGetMoreCategory] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");
  
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file) 
      const res = await axios.post("/upload", formData)
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }
  const handleClick = async e=> {
    e.preventDefault();
    upload();
  }

  return (
    <div className="mt-10 px-5 container mx-auto flex flex-wrap justify-around ">
      <div className=" sm:w-3/5 md:w-2/4 lg:w-3/5 flex flex-col justify-start ">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 border-2 border-gray-200 mb-5"
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
              <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
            </div>
            <div className="flex gap-3 justify-between pt-2">
              <button className="bg-blue-500 text-white">Save as draft</button>
              <button className="bg-blue-500 text-white" onClick={handleClick}>Public</button>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-3 md:mt-1.5 lg:mt-4 flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
          <h1 className="text-3xl font-bold">Category</h1>
          
          <div className="flex gap-2">
            <input type="radio" value="art" name="category" onChange={(e) => setCat(e.target.value)}/> Art
            <input type="radio" value="technology" name="category" onChange={(e) => setCat(e.target.value)}/> Technology
            <input type="radio" value="design" name="category" onChange={(e) => setCat(e.target.value)}/> Design
            <input type="radio" value="food" name="category" onChange={(e) => setCat(e.target.value)}/> Food
            <input type="radio" value="videogame" name="category" onChange={(e) => setCat(e.target.value)}/> Video Game
          </div>
        </div>
      </div>
    </div>
  );
};
