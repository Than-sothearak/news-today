import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
        <div className="flex text-2xl gap-x-2">
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><FaFacebook /></a>
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};
