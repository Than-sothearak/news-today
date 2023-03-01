import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

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
        <div className="flex text-2xl gap-x-4">
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><FaFacebook /></a>
          <a href="https://www.instagram.com/sothearak_z/" className="text-white"><FaInstagram /></a>
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/sothearak_z/" className="text-white"><AiFillTwitterCircle /></a>
        </div>
      </div>
    </div>
  );
};
