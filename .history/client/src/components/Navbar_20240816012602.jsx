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
                className="p-6 w-full"
                onClick={() => setClickProfile((prev) => !prev)}
              > 
                <img src="data:image/png;base64,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"/>
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
                  {nav.subCategory && (
                <MdKeyboardArrowRight size={28}/>
                )}
                </Link>
             
                {nav.subCategory && (
                  <div className="flex flex-col justify-center items-start gap-4 ">
                    {nav.subCategory.map((subLink) => (
                      <Link to={subLink.href} className="hover:line-through">{subLink.name}</Link>
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
