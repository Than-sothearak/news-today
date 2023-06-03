import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
