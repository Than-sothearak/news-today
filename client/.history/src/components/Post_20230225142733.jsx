import React from "react";

export const Post = ({ post }) => {
  return (
    <div className="container mx-auto flex">
      <div className="container mx-auto m-10">
        <img src={post.img} />
      </div>
      <div>
        <h1>{post.title}dsdsdsd</h1>
        <p>{post.desc}dsd</p>
      </div>
    </div>
  );
};
