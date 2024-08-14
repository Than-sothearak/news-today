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
  const [files, setFiles] = useState(""); // Updated to handle multiple files
  const [cat, setCat] = useState(state?.cat || "");
  const [uploadedImages, setUploadedImages] = useState([]);

  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (e) => {
      setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!selectedFiles) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i]);
    }

    try {
        const res = await axios.post('/api/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setUploadedImages(res.data.imageUrls);
    } catch (error) {
        console.error('Error uploading images:', error);
    }
};

  const uploadImages = async () => {
    const uploadedUrls = [];
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        const res = await axios.post("/api/upload", formData);
        uploadedUrls.push(res.data);
      });
      await Promise.all(uploadPromises);
    } catch (err) {
      console.log(err);
    }
    return uploadedUrls;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrls = await uploadImages();

    try {
      const postData = {
        title,
        desc: value,
        cat,
        img: imgUrls.join(", "), // Join the URLs if multiple images are uploaded
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
      };

      state
        ? await axios.put(`/api/posts/${state.id}`, postData)
        : await axios.post(`/api/posts/`, postData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10 container mx-auto h-screen flex flex-wrap justify-around ">
      <div className=" sm:w-3/5 md:w-2/4 lg:w-3/5 flex flex-col justify-start ">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
          value={title}
        />
        <div>
          <ReactQuill
            className="h-56"
            theme="snow"
            value={value}
            onChange={setValue}
          />
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
              <h3>Upload Images</h3>
              <input type="file" multiple onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload Images</button>

              {uploadedImages.length > 0 && (
                <div>
                  <h3>Uploaded Images:</h3>
                  {uploadedImages.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Uploaded ${index + 1}`}
                      style={{ width: "100px", margin: "10px" }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-3 justify-between pt-2">
              <button className="bg-blue-500 text-white">Save as draft</button>
              <button className="bg-blue-500 text-white" onClick={handleClick}>
                Public
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3 sm:mt-3 md:mt-1.5 lg:mt-4 flex flex-col pt-5 px-7 pb-5 gap-2 text-start border-2 border-gray-200">
          <h1 className="text-3xl font-bold">Category</h1>

          <div className="flex gap-2">
            <input
              type="radio"
              checked={cat === "art"}
              value="art"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            />{" "}
            Art
            <input
              type="radio"
              checked={cat === "technology"}
              value="technology"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            />{" "}
            Technology
            <input
              type="radio"
              checked={cat === "design"}
              value="design"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            />{" "}
            Design
            <input
              type="radio"
              checked={cat === "food"}
              value="food"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            />{" "}
            Food
            <input
              type="radio"
              checked={cat === "videogame"}
              value="videogame"
              name="category"
              onChange={(e) => setCat(e.target.value)}
            />{" "}
            Video Game
          </div>
        </div>
      </div>
    </div>
  );
};
