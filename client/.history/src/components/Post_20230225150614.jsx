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
    <div className="container mx-auto m-10">
      <div className="w-96 min-h-full pr-10">
        <img src={post.img} className="object-cover w-96" />
      </div>
      <div className="w-96 text-start pr-10">
        <h2>{date}</h2>
        <h1 className="font-bold ">{post.title}</h1>
        <p className="mt-5">{post.desc}</p>
      </div>
    </div>
  );
};
