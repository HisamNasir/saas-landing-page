import React from "react";
import AppBar from "@mui/material/AppBar";
import Navbar from "./Navbar";
import LinearProgress from "@mui/material/LinearProgress";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className=" flex flex-col gap-11">{children}</main>

      {/* Footer */}
      <footer className="bg-white-800 py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
