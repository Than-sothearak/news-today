import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {  MdClose, MdLogout, MdModeEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const UserProfile = ({currentUser, logout}) => {
    const [clickProfile, setClickProfile] = useState(false);
    const navigate = useNavigate();
    const userLogout = () => {
        logout();
        navigate("/");
      };
  return (
    <div className="mr-6 z-50 w-12 h-12 flex items-center rounded-full md:mt-0 mt-3 hover:bg-slate-100">
    {currentUser ? (
      <div className="relative group">
        <button
          className=""
          onClick={() => setClickProfile((prev) => !prev)}
        >
          <img
            className="inline-block h-12 w-12 rounded-full ring-8 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
        <div
          className={`shadow-lg absolute right-0 w-[320px] bg-white mt-6 border rounded-xl  flex-col justify-center items-center ${
            !clickProfile ? "hidden" : "flex"
          }`}
        >
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <h2 className="font-bold">{currentUser.email}</h2>
            <div className="relative">
              <img
                className="inline-block h-24 w-24 rounded-full  ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <Link  to="/profile" className="absolute right-0 bottom-0 bg-gray-800 rounded-full text-white p-1 hover:bg-slate-600">
                {" "}
                <MdModeEdit />
              </Link>
            </div>
            <h1 className="text-xl">Welcome, {currentUser.username}!</h1>
          </div>
          <div className="flex justify-center items-center p-2 absolute top-2 right-2 rounded-full hover:bg-slate-100 hover:text-300">
            <button onClick={() => setClickProfile((prev) => !prev)}>
              <MdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col m-2">
            <Link
              to="/write"
              className="text-center cursor-pointer w-full p-4"
            >
              Write
            </Link>
            <button
            onClick={userLogout}
            className="cursor-pointer w-full p-4 flex justify-center items-center gap-2"
          > 
          <MdLogout />
            Logout
          </button>
          </div>
         
        </div>
      </div>
    ) : (
      <button className="px-4 py-2">
        <Link to="/login">
        <FaUser />
        </Link>
      </button>
    )}
  </div>
  )
}

export default UserProfile