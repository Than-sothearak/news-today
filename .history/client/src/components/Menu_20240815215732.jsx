import axios from "axios";
import React, { useEffect, useState } from "react";

export const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fatchData = async () => {
        try {
          const res = await axios.get(`/api/posts/?cat=${cat}`);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fatchData();
    }, [cat]);

    console.log(posts)
  return (
    <div className="text-start mt-16">
      <h1 className="font-bold text-xl">Other posts you may like</h1>
      <div className="flex flex-wrap gap-5">
        {posts.map((post) => (
          <div key={post.id} className="w-44 h-44 py-5">
            <img src={`${post.img}`} className="object-cover w-full h-full" />
            <h3 className="text-start text-md font-bold overflow-hidden whitespace-nowrap text-ellipsis">
              {post.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
