import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
