import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-46  bg-blue-600 text-white">
      <div className="flex flex-wrap justify-around container mx-auto p-5 ">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <li className="list-none">About</li>
          <li className="list-none">Home</li>
          <li className="list-none">Contact</li>
        </div>
        <div>icons</div>
      </div>
    </div>
  );
};
