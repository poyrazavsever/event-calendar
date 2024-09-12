import React from "react";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>{children}</main>
      <Scroll />
    </div>
  );
};

export default MainLayout;
