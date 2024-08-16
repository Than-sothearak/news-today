import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";
import axios from "axios";
import { useLocation } from "react-router-dom";
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fatchData();
  }, [cat]);

  return (
    <div className="mt-10 container mx-auto h-full px-4 2xl:px-72 xl:px-46 lg:px-40 md:px-20 sm:px-4">
      <div
        className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-83 
"
      >
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};