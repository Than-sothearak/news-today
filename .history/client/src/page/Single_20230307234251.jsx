import React, { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { posts } from '../../data.js'
import moment from "moment";
import axios from "axios";
export const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();

  const postId = location.pathname.split("/")[3];
  console.log(postId)
  const { currentUser } = useContext(AuthContext);
 
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

  return (
    <div className="py-5 container mx-auto flex flex-wrap justify-between">
      <div className="container w-4/5 sm:1/2 md:w-3/5 lg:w-3/5 xl:w-3/4 ml-10 md:ml-5 xl:ml-5">
        <div className="w-full h-80">
          <img
            className="object-top object-cover w-full h-full"
            src={post?.img}
          />
        </div>
        <div className="flex flex-wrap pt-5">
          <div>
          {post.userImg &&  <img
              className="w-10 h-10 rounded-full"
              src={post.userImg}
              alt="Rounded avatar"
            />}
           
          </div>
          <div className="px-4 text-start">
            <h3 className="font-bold">{post.username}</h3>
            <h6>Posted {moment(post.date).fromNow}</h6>
          </div>
          {currentUser.username === post.username && (
            <div className="flex text-xl gap-1 cursor-pointer">
              <RiEditBoxLine />
              <MdDeleteOutline />
            </div>
          )}
          <div className="text-start">
            <h1 className="font-bold text-3xl py-5">{post.title}</h1>
            <p>{post.decs}</p>
          </div>
        </div>
      </div>
      {/* <div className="mx-10 sm:ml-2 md:mx-0 text-start">
        <h1 className="font-bold text-xl">Other posts you may like</h1>
        {posts.map((post) => (
          <div key={post.id} className="w-full md:w-60 lg:w-72 py-5">
            <img src={post.img} className="object-cover w-full h-full" />
            <h3 className="text-start text-2xl font-bold">{post.title}</h3>
            <button className="float-left my-5 border-blue-500 bg-transparent text-blue-600">
              Read more
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};
