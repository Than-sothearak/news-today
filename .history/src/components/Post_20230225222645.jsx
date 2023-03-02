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
    <div className="container max-auto">
      <div className="bg-indigo-300 w-auto h-56 rounded-lg">
        <img src={post.img} className="rounded-lg object-cover w-full h-full" />
      </div>
      <div className="w-full h-auto text-start mt-2">
        <h2 className="text-sm">{date}</h2>
        <h1 className="font-bold text-xl">{post.title}</h1>
        <p className="mt-1 text-xs text-ellipsis whitespace-nowrap">{post.desc}</p>
      </div>
    </div>
  );
};
