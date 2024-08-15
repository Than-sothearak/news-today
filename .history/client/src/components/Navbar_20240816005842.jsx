import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import axios from "axios";
import { IoClose, IoMenu } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

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
        <div className="h-full flex justify-center items-center z-50">
          <h3 className="font-bold text-2xl text-red-600 p-5 w-full">
            News Today
          </h3>
        </div>

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
                <Link
                  to="/profile"
                  className="text-center cursor-pointer w-full border-b p-4"
                >
                  Your profile
                </Link>
                <Link
                  to="/write"
                  className="text-center cursor-pointer w-full border-b p-4"
                >
                  Write
                </Link>
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
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>

        {/* Mobile responsive */}
        <button
          className="md:hidden block mr-4 z-50"
          onClick={() => setClickedMenu((prev) => !prev)}
        >
          {clickedMenu ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {clickedMenu && (
        <div className="fixed inset-0 bg-white z-40 flex justify-center items-center md:hidden">
          <div className="flex flex-col text-center w-full">
            {navigation.map((nav) => (
              <div
                key={nav.name}
                className="p-6 text-black hover:bg-red-600 hover:text-white flex justify-center"
              >
                <Link to={nav.href} className="relative flex">
                  {nav.name}
                  {nav.subCategory && (
                <MdKeyboardArrowRight size={28}/>
                )}
                </Link>
             
                {/* {nav.subCategory && (
                  <div className="flex flex-col justify-center items-start hover:bg-white absolute right-0">
                    {nav.subCategory.map((subLink) => (
                      <Link to={subLink.href} className="">{subLink.name}</Link>
                    ))}
                  </div>
                )} */}
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
      )}
    </div>
  );
};
