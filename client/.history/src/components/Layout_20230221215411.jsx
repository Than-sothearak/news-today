import React from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
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
