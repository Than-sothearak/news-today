import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
  return (
    <div className="w-full h-46  bg-blue-600 text-white mt-10 py-10">
      <div className="flex flex-wrap justify-between container mx-auto p-5  ">
        <div className="xs:pb-10">
          <h1>Sothearak</h1>
        </div>
        <div className="text-start">
          <li className="list-none">About</li>
          <li className="list-none">Home</li>
          <li className="list-none">Contact</li>
        </div>
        <div className="flex text-2xl gap-x-4">
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><FaFacebook /></a>
          <a href="https://www.instagram.com/sothearak_z/" className="text-white"><FaInstagram /></a>
          <a href="https://www.facebook.com/Sothearak.gmail/" className="text-white"><AiFillLinkedin /></a>
          <a href="https://www.instagram.com/sothearak_z/" className="text-white"><AiFillTwitterCircle /></a>
          <a href="https://github.com/Than-sothearak" className="text-white"><AiFillGithub /></a>
        </div>
      </div>
      <hr></hr>
      <div className="container mx-auto flex justify-center mt-5">
        <p className="text-sm">© 2023 Than Sothearak</p>
      </div>
    </div>
  );
};
