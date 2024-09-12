import React from "react";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="pt-16 flex-grow">{children}</main>
      <Scroll />
    </div>
  );
};

export default MainLayout;
