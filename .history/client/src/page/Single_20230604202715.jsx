import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Menu } from "../components/Menu";
import moment from "moment";
import axios from "axios";

export const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const postId = location.pathname.split("/")[2];

  const date = new Date();
  const getDateToString = date.toString();
  const getDate = getDateToString.slice(0, 25);

  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const checkUsername = () => {
    
    if (currentUser.username === post.username) {
      return (
        <div className="flex text-xl gap-1 cursor-pointer">
          <Link to={`/write?edit=2`} state={post}>
            <RiEditBoxLine />
          </Link>
          <MdDeleteOutline onClick={handleDelete} />
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="mt-4 px-4 2xl:px-80 xl:px-46 lg:px-40 md:px-20 sm:px-4 container mx-auto flex flex-col justify-center list-disc">
      <div>
        <div className="text-start">
          <h1 className="font-bold text-3xl py-5">{post.title}</h1>
          <div className="mb-10 flex flex-wrap pt-5">
            <div>
              {post.userImg ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={post.userImg}
                  alt="Rounded avatar"
                />
              ) : (
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                  alt="Rounded avatar"
                />
              )}
            </div>
            <div className="px-4 text-start">
              <h3 className="font-bold">{post.username}</h3>
              <div className="flex gap-3 text-sm">
                <h6>Posted {moment(post.date).fromNow()}</h6>
                <p>{getDate}</p>
              </div>
            </div>
          </div>
          <ul
            dangerouslySetInnerHTML={{ __html: post.desc }}
            className="description"
          ></ul>
        </div>
        <div
          className="h-full flex justify-center
         w-full"
        >
          <img
            className="object-center object-cover w-full h-full"
            src={`../upload/${post?.img}`}
          />
        </div>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};
