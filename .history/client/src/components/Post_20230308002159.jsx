import React from "react";
import { Link } from "react-router-dom";
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
  const currentdate = `${current.getDate()}/${
    monthNames[current.getMonth() + 1]
  }/${current.getFullYear()}`;

  const date = post.date.slice();
  console.log(date)

  return (
    <div className="cursor-pointer container max-auto" >
      <Link className="text-gray-700" to={`/post/${post.id}`}>
      <div className="bg-indigo-300 w-auto h-56 rounded-lg">
        <img src={post.img} className="rounded-lg object-cover w-full h-full" />
      </div>
      <div className="w-full h-auto text-start mt-2">
        <h2 className="text-sm mb-3">{date}</h2>
        <h1 className="font-bold text-xl text-ellipsis whitespace-nowrap overflow-hidden">
          {post.title}
        </h1>
        <p className="mt-1 text-xs text-ellipsis whitespace-nowrap overflow-hidden">
          {post.desc}
        </p>
      </div>
      </Link>
    </div>
  );
};
