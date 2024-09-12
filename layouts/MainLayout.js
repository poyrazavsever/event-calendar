import React from 'react';
import Navbar from '@/components/Navbar';
import Scroll from '@/components/Scroll';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Scroll />
    </div>
  );
};

export default MainLayout;
