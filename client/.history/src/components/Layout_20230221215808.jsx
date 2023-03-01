import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Home } from "./page/Home";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
