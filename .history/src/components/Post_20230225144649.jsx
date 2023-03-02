import React ,{useState} from "react";

export const Post = ({ post }) => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <div className="container mx-auto flex m-10">
      <div className="container mx-auto bg-cover">
        <img src={post.img} className="bg-auto" />
      </div>
      <div>
       
<h2>date</h2>
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};
