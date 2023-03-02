import React from "react";

export const Post = ({ post }) => {
  const date = new Date();
  return (
    <div className="container mx-auto flex m-10">
      <div className="container mx-auto bg-cover">
        <img src={post.img} className="bg-auto" />
      </div>
      <div>
        <p>{date.getDay}</p>
        <h1>{post.title}dsdsdsd</h1>
        <p>{post.desc}dsd</p>
      </div>
    </div>
  );
};
