import React from "react";
import { data } from '../../data.js'
export const Menu = () => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="w-44 h-44 py-5">
          <img src={post.img} className="object-cover w-full h-full" />
          <h3 className="text-start text-md font-bold overflow-hidden whitespace-nowrap text-ellipsis">
            {post.title}
          </h3>
        </div>
      ))}
    </div>
  );
};
