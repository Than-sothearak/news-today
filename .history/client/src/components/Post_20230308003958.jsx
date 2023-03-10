import React from "react";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {

  const date = post.date.slice(0, 10);
  const getMonth = date.slice(5, 7)
  const getYear = date.slice(0, 4)
  const getDay = date.slice(7, 7)
  console.log(date)

  function getMonthString(getMonth)
    {
      var month;    //Create a local variable to hold the string
      switch(getMonth)
      {
        case "1":
          month="January";
          break;
        case "2":
          month="February";
          break;
        case "3":
          month="March";
          break;
        case "4":
          month="April";
          break;
        case "5":
          month="May";
          break;
        case "6":
          month="June";
          break;
        case "7":
          month="July";
          break;
        case "8":
          month="August";
          break;
        case "9":
          month="September";
          break;
        case "10":
          month="October";
          break;
        case "11":
          month="November";
          break;
        case "12":
          month="December";
          break;
        default:
          month="Invalid month";
      }
      return month;
    }
  return (
    <div className="cursor-pointer container max-auto" >
      <Link className="text-gray-700" to={`/post/${post.id}`}>
      <div className="bg-indigo-300 w-auto h-56 rounded-lg">
        <img src={post.img} className="rounded-lg object-cover w-full h-full" />
      </div>
      <div className="w-full h-auto text-start mt-2">
        <h2 className="text-sm mb-3">{getYear} {getMonthString(getMonth)} {getDay}</h2>
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
