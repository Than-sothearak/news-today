import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight, MdModeEdit } from "react-icons/md";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "About", href: "#", current: false },
  {
    name: "Category",
    href: "#",
    current: false,
    subCategory: [
      { name: "Technology", href: "technology" },
      { name: "Art", href: "art" },
      { name: "Music", href: "music" },
      { name: "Gaming", href: "videogame" },
    ],
  },
];

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [clickProfile, setClickProfile] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(false);
  const [user, setUser] = useState(null); // Adding user state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/user/${currentUser?.id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentUser) fetchData();
  }, [currentUser]);

  const userLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="relative z-50">
      <nav className="container max-w-full flex justify-between items-center mt-auto bg-white text-black shadow-sm z-50">
        <div className="h-full justify-center items-center z-50 md:flex hidden">
          <h3 className="font-bold text-2xl text-red-600 p-5 w-full">
            News Today
          </h3>
        </div>

        {/* Mobile responsive */}
        <button
          className="md:hidden block ml-4 z-50"
          onClick={() => setClickedMenu((prev) => !prev)}
        >
          {clickedMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>

        <div className="md:flex items-center gap-4 cursor-pointer hidden">
          {navigation.map((nav) => (
            <div
              key={nav.name}
              className="relative p-6 hover:bg-red-600 hover:text-white group"
            >
              <Link to={nav.href} className="w-full h-full hover:underline">
                {nav.name}
              </Link>

              {nav.subCategory && (
                <div className="hidden shadow-lg absolute w-48 left-0 top-[68px] bg-white flex-col justify-center items-center group-hover:flex group-hover:text-black">
                  {nav.subCategory.map((subCat) => (
                    <Link
                      key={subCat.name}
                      to={`/?cat=${subCat.href}`}
                      className="hover:underline text-center cursor-pointer w-full border-b p-4"
                    >
                      {subCat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mr-6 z-50 border rounded-full md:mt-0 mt-3 bg-blue-800">
          {currentUser ? (
            <div className="relative group">
              <button
                className=""
                onClick={() => setClickProfile((prev) => !prev)}
              >
                <img
                  class="inline-block h-12 w-12 rounded-full ring-8 ring-white"
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
                  <div className="">
                  <img
                    class="inline-block h-24 w-24 rounded-full  ring-white relative"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                 <button className="absolute"> <MdModeEdit /></button>
                  
                  </div>
                  <h1 className="text-xl">Welcome, {currentUser.username}!</h1>
                </div>
                <div className="flex flex-col">
                  <Link
                    to="/profile"
                    className="text-center cursor-pointer w-full p-4"
                  >
                    Your profile
                  </Link>
                  <Link
                    to="/write"
                    className="text-center cursor-pointer w-full p-4"
                  >
                    Write
                  </Link>
                </div>
                <button
                  onClick={userLogout}
                  className="cursor-pointer w-full border-b p-4"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button className="px-4 py-2 text-white">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {clickedMenu && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex justify-center items-center">
          <div className="flex flex-col text-center w-full">
            <div className="h-full justify-center items-center z-50">
              <h3 className="font-bold text-2xl text-red-600 p-5 w-full">
                News Today
              </h3>
              {navigation.map((nav) => (
                <div
                  key={nav.name}
                  className="p-6 text-black hover:bg-red-600 hover:text-white flex justify-center hover:underline group"
                >
                  <Link to={nav.href} className="relative flex">
                    {nav.name}
                    {nav.subCategory && <MdKeyboardArrowRight size={28} />}
                  </Link>

                  {nav.subCategory && (
                    <div className="flex flex-col justify-center items-start gap-4 ">
                      {nav.subCategory.map((subLink) => (
                        <Link to={subLink.href} className="hover:line-through">
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {currentUser && (
                <button
                  onClick={userLogout}
                  className="p-6 text-black hover:bg-red-600 hover:text-white"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
