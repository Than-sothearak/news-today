import { AuthContext } from "../context/authContext";
import React, { useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(currentUser.username || "");
  const [email, setEmail] = useState(currentUser.email || "");

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
      currentUser
        ? await axios.put(`/user/${currentUser.id}`, {
            username,
            email,
            img: file ? imgUrl : "",
          })
        : await axios.post(`api/user/`, {
            username,
            email,
            img: file ? imgUrl : "",
            date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
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
              {/* <p className="text-sm font-semibold leading-6 text-gray-900">
                {currentUser.username}
              </p> */}
              <input
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
          value={username}
        />
             <input
          onChange={(e) => setUsername(e.target.value)}
          className="px-2 border-2 border-gray-200 mb-5"
          type="text"
          placeholder="Title"
          value={email}
        />
     
           
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
