import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-blue-600 text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
