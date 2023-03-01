import React from "react";

export const Post = ({ post }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const date = `${current.getDate()}/${
    monthNames[current.getMonth() + 1]
  }/${current.getFullYear()}`;
  return (
    <div className="container mx-auto m-10 flexinline-block align-middle">
      <div className="max-w-full max-h-full">
        <img src={post.img} className="object-cover max-h-full" />
      </div>
      <div className="text-start">
        <h2>{date}</h2>
        <h1 className="font-bold ">{post.title}</h1>
        <p className="mt-5">{post.desc}</p>
      </div>
    </div>
  );
};
