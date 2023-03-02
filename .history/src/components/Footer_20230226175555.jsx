import React from "react";
import { FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="w-full h-46  bg-blue-600 text-white">
      <div className="flex flex-wrap justify-between container mx-auto p-5 ">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <li className="list-none">About</li>
          <li className="list-none">Home</li>
          <li className="list-none">Contact</li>
        </div>
        <div className="text-2xl">
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};
