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
      <div className="bg-indigo-300 w-80 h-48 rounded-md">
        <img src={post.img} className="rounded-lg object-cover h-48 w-80" />
      </div>
      <div className="w-80 h-autotext-start mt-2">
        <h2 className="text-sm">{date}</h2>
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="mt-1 text-xs">{post.desc}</p>
      </div>
    </div>
  );
};
