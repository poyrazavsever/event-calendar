import React from 'react';
import Navbar from '@/components/Navbar';
import Scroll from '@/components/Scroll';
import CustomCursor from '@/components/CustomCursor';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Scroll />
      <CustomCursor />
    </div>
  );
};

export default MainLayout;
