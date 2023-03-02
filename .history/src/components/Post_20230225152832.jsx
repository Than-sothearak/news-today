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
    <div className="container mx-auto m-1 rounded-md">
      <div className="bg-indigo-300 w-96 h-48 rounded-md">
        <img src={post.img} className="rounded-lg object-cover h-48 w-96" />
      </div>
      <div className="text-start mt-2">
        <h2>{date}</h2>
        <h1 className="font-bold text-xs">{post.title}</h1>
        <p className="mt-5">{post.desc}</p>
      </div>
    </div>
  );
};
