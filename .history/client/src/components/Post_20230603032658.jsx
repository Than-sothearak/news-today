import React from "react";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
  
  
  var now_utc = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );

  const getMonth = now_utc.slice(5, 7);
  const getYear =now_utc.slice(0, 4);
  const getDay = now_utc.slice(8, 10);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  function getMonthString(getMonth) {
    let month; //Create a local variable to hold the string
    switch (getMonth) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
      default:
        month = "Invalid month";
    }
    return month;
  }

  return (
    <div className="cursor-pointer container max-auto">
      <Link className="text-gray-700" to={`/post/${post.id}`}>
        <div className="bg-indigo-300 w-auto h-56 rounded-lg">
          <img
            src={`./upload/${post.img}`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-auto text-start mt-2">
          <h2 className="text-sm mb-3">
            {getYear} {getMonthString(getMonth)} {getDay}
          </h2>
          <h1 className="font-bold text-xl text-ellipsis whitespace-nowrap overflow-hidden">
            {post.title}
          </h1>
          <p className="mt-1 text-xs text-ellipsis whitespace-nowrap overflow-hidden">
            {getText(post.desc)}
          </p>
        </div>
      </Link>
    </div>
  );
};
