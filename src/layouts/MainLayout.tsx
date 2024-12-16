import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="min-h-screen bg-gray-700 text-white font-sans">{children}</div>;
};

export default MainLayout;