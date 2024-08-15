import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";
import { IoClose, IoMenu } from "react-icons/io5";

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
  const [clickedMenu, setClickedMenu] = useState(false)

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
    fetchData();
  }, [currentUser?.id]);

  const userLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="container max-w-full flex justify-between items-center mt-auto bg-white text-black shadow-sm">
      <div className="h-full flex justify-center items-center">
        <h3 className="font-bold text-2xl text-red-600 p-5 w-full">News Today</h3>
      </div>

      <div className=" md:flex items-center gap-4 cursor-pointer hidden">
        {navigation.map((nav) => (
          <div
            key={nav.name}
            className="relative p-6 hover:bg-red-600 hover:text-white group"
          >
            <a href={nav.href} className="w-full h-full hover:underline">
              {nav.name}
            </a>

            {nav.subCategory && (
              <div className="hidden shadow-lg absolute w-48 left-0 top-[68px] bg-white flex-col justify-center items-center group-hover:flex group-hover:text-black">
                {nav.subCategory.map((subCat) => (
                  <a
                    key={subCat.name}
                    href={`/?cat=${subCat.href}`}
                    className="hover:underline text-center cursor-pointer w-full border-b p-4"
                  >
                    {subCat.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mr-6 md:flex hidden">
        {currentUser ? (
          <div className="relative group">
            <button
              className="p-6 w-full"
              onClick={() => setClickProfile((prev) => !prev)}
            >
              {currentUser.username}
            </button>
            <div
              className={`shadow-lg absolute w-36 right-4 bg-white  flex-col justify-center items-center ${
                !clickProfile ? "hidden" : "flex"
              }`}
            >
              <a
                href="/profile"
                className="text-center cursor-pointer w-full border-b p-4"
              >
                Your profile
              </a>
              <a
                href="/write"
                className="text-center cursor-pointer w-full border-b p-4"
              >
                Write
              </a>
              <button
                onClick={userLogout}
                className="cursor-pointer w-full border-b p-4"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button>
            <a href="login">Login</a>
          </button>
        )}
      </div>

      {/* Mobile responsive */}
      <button className="md:hidden block mr-4" onClick={()=> setClickedMenu(prev => !prev)}>
      {clickedMenu ? <IoMenu size={28}/> : <IoClose size={28}/>}
      </button>
      <div className="w-screen h-screen absolute">
      <div className=" md:flex items-center gap-4 cursor-pointer hidden">
        {navigation.map((nav) => (
          <div
            key={nav.name}
            className="relative p-6 hover:bg-red-600 hover:text-white group"
          >
            <a href={nav.href} className="w-full h-full hover:underline">
              {nav.name}
            </a>

            {nav.subCategory && (
              <div className="hidden shadow-lg absolute w-48 left-0 top-[68px] bg-white flex-col justify-center items-center group-hover:flex group-hover:text-black">
                {nav.subCategory.map((subCat) => (
                  <a
                    key={subCat.name}
                    href={`/?cat=${subCat.href}`}
                    className="hover:underline text-center cursor-pointer w-full border-b p-4"
                  >
                    {subCat.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

    </nav>
  );
};
