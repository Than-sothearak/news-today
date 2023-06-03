import React from "react";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
  
  const date = new Date();

  const getDateToString= date.toString()
 
  const getDate = getDateToString.slice(0, 10)
  const getMonth = getDate.slice(4, 7)
  const getYear = getDate.slice(0, 4)
  const getDay = getDate.slice(8, 10)
  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.innerHTML;
  };

  function getMonthString(getMonth) {
    let month; //Create a local variable to hold the string
    switch (getMonth) {
      case "Jan":
        month = "January";
        break;
      case "Feb":
        month = "February";
        break;
      case "Mar":
        month = "March";
        break;
      case "Apr":
        month = "April";
        break;
      case "May":
        month = "May";
        break;
      case "Jun":
        month = "June";
        break;
      case "Jul":
        month = "July";
        break;
      case "Aug":
        month = "August";
        break;
      case "Sep":
        month = "September";
        break;
      case "Oc":
        month = "October";
        break;
      case "No":
        month = "November";
        break;
      case "Dec":
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
