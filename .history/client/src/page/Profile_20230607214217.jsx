import { AuthContext } from "../context/authContext";
import React, { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);

  const state = useLocation().state;
  const [file, setFile] = useState(null);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/upload", formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/api/users/${state.id}`, {
            uername,
            email,

            img: file ? imgUrl : "",
          })
        : await axios.post(`/api/users/`, {
            uername,
            email,
            img: file ? imgUrl : "",
            date: moment(new Date(now_utc)).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 2xl:px-80 xl:px-46 lg:px-40 md:px-20 sm:px-4 container mx-auto">
      {" "}
      <ul role="list" className="divide-y divide-gray-100">
        <li
          key={currentUser.email}
          className="flex justify-between gap-x-6 py-5"
        >
          <div className="flex gap-x-4">
            <img
              className="h-14 w-14 flex-none bg-gray-50"
              src={currentUser.img}
              alt=""
            />
            <div>
              <h3>Upload Image</h3>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="img"
                name={file}
                accept="image/*"
              ></input>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {currentUser.username}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {currentUser.email}
              </p>
            </div>
            <button className="bg-blue-500 text-white" onClick={handleClick}>
              Updated
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
