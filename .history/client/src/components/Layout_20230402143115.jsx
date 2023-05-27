import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
