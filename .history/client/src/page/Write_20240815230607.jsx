import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import moment from "moment";

export const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [cat, setCat] = useState(state?.cat || "");
  const [imageUrl, setImageUrl] = useState(state?.img); // Store uploaded image URL
  const [selectedPreviewImage, setSelectedPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [editImage, setEditImage] = useState(false)

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // Save the file for upload
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleUpload = async () => {
    if (!imageFile) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const res = await axios.post("/api/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSelectedPreviewImage("")
      setImageUrl(res.data.link); // Store the uploaded image URL
      
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  const handleSubmitForm= async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      const postData = {
        title,
        desc: value,
        cat,
        img: imageUrl, // Use the uploaded image URL
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
      };

      if (state) {
        await axios.put(`/api/posts/${state.id}`, postData);
      } else {
        await axios.post(`/api/posts/`, postData);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10 container mx-auto h-full grid lg:grid-cols-2 gap-12">
      <div className="w-full flex flex-col justify-start h-full">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
          value={title}
        />
        <div className="h-[30rem]">
          <ReactQuill
            className="h-full"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <div className="flex flex-col flex-wrap p-0">
        <div className="">
          <div className="flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
            <h1 className="text-3xl font-bold">Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            {imageUrl && 
            <div>
               <img 
               src={imageUrl}
               />
            </div>

             } <div>
              <h3>Images</h3>
              <div>
                <label className="flex flex-col justify-center items-center border-4 h-60 rounded-md border-dotted cursor-pointer">
                  <div>
                    {uploading && (
                      <h2 className="text-blue-500 text-muted-foreground">
                        Please wait a moment...
                      </h2>
                    )}
                    {!uploading && (
                      <h2 className="text-blue-500">Choose image file here</h2>
                    )}
                  </div>

                  <input
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                    type="file"
                    name="image"
                    disabled={uploading}
                  />
                </label>
                <div className="text-xs text-muted-foreground mt-4">
                  <p>16:9 aspect ratio recommended</p>
                </div>
                {selectedPreviewImage && (
                  <div className="mt-4">
                    <img
                      width={300}
                      height={300}
                      src={selectedPreviewImage}
                      alt="Selected Preview"
                      className="max-w-full h-auto border-2 border-gray-300 rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
              <button
                onClick={handleUpload}
                className="mt-4 p-2 rounded-lg border hover:bg-blue-600"
              >
                Upload Image
              </button>
            </div>
            
            
          </div>
        </div>

        <div className="mt-3 sm:mt-3 md:mt-1.5 lg:mt-4 flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
          <h1 className="text-3xl font-bold">Category</h1>
          <div className="flex gap-2 flex-wrap">
            <input
              type="radio"
              checked={cat === "art"}
              value="art"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            /> Art
            <input
              type="radio"
              checked={cat === "technology"}
              value="technology"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            /> Technology
            <input
              type="radio"
              checked={cat === "design"}
              value="design"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            /> Design
            <input
              type="radio"
              checked={cat === "food"}
              value="food"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            /> Food
            <input
              type="radio"
              checked={cat === "videogame"}
              value="videogame"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            /> Video Game
          </div>
        </div>
       <div className="flex justify-end">
       <button
          onClick={handleSubmitForm}
          className="mt-4 p-2 rounded-lg bg-blue-600 text-white"
        >
          Save
        </button>
       </div>
      </div>
    </div>
  );
};
