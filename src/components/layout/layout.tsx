import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { Theme } from '../../const';
import { useScrollToTop } from '../../hooks/useScrollToTop';

import { Header } from '../header/header';
import { ThemeContext } from '../theme-provider/theme-provider';

export const Layout = () => {
  useScrollToTop();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-[10]">
        <Header />
      </div>

      <main
        className={`${theme === Theme.Dark ? 'text-white' : ''} container mx-auto p-6 flex-grow`}
      >
        <Outlet />
      </main>
    </div>
  );
};
