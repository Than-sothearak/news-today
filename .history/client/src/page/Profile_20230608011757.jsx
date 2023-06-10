import { AuthContext } from "../context/authContext";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { MdEmail } from "react-icons/md";

export default function EditProfile() {
  const { currentUser } = useContext(AuthContext);
  const state = useLocation().state;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/user/${currentUser?.id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <div className="px-4 2xl:px-80 xl:px-46 lg:px-40 md:px-20 sm:px-4 container mx-auto">
      {" "}
      <div className="flex gap-x-4">
        <img
          className="h-64 w-64 flex-none bg-gray-50"
          src={`../upload/${user?.img}`}
          alt=""
        />

        <div className="min-w-0 flex-auto">
          <p> {user?.username}</p>

          <p>{user?.email}</p>
          <p
            onChange={(e) => setLink(e.target.value)}
            className="px-2 border-2 border-gray-200 mb-5"
            type="text"
            placeholder="link"
            value={user.link}
          >
            {" "}
          </p>
        </div>
        <Link to="/profile?edit=2" state={user}>
        <button className="bg-blue-500 text-white">Edit</button>
        </Link>
       
      </div>
    </div>
  );
}
