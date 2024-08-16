import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import moment from "moment";
import UploadImageForm from "../components/UploadImageForm";

export const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [imageUrl, setImageUrl] = useState(state?.img || ""); // Store uploaded image URL
  const [cat, setCat] = useState(state?.cat || "");
  const [imageFile, setImageFile] = useState(null);
  const [editImage, setEditImage] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedPreviewImage, setSelectedPreviewImage] = useState(null);

  const categories = ["art", "technology", "design", "food", "videogame"];

  const navigate = useNavigate();

  const handleEditImage = () => {
    setEditImage((prev) => !prev);
  };

  const handleRemoveImgae = () => {
    setSelectedPreviewImage(null);
    setImageFile(null);
  };
  const handleImageChange = (file) => {
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
    if (!imageFile) {
      alert("No file select");
      return
    } else {
      setUploading(true);

      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const res = await axios.post("/api/image/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setSelectedPreviewImage("");
        setImageUrl(res.data.link); // Store the uploaded image URL
        setEditImage(false);
        setUploading(false);
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploading(false);
      }
    }
  };

  const handleSubmitForm = async (e) => {
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

      <div className="flex flex-col flex-wrap p-0 gap-6">
        <UploadImageForm
          handleEditImage={handleEditImage}
          isEditing={editImage}
          imageUrl={imageUrl}
          imageFile={imageFile}
          handleImageChange={handleImageChange}
          handleUpload={handleUpload}
          uploading={uploading}
          selectedPreviewImage={selectedPreviewImage}
          handleRemoveImgae={handleRemoveImgae}
        />

        <div className="flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
          <h1 className="text-3xl font-bold">Category</h1>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <label key={category} className="flex gap-2">
                <input
                  type="radio"
                  checked={cat === category}
                  value={category}
                  name="category"
                  onChange={(e) => setCat(e.target.value)}
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmitForm}
            className="mt-4 p-2 rounded-lg bg-blue-600 text-white hover:text-black hover:bg-transparent border"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
