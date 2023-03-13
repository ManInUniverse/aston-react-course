import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="container mx-auto p-6 flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
