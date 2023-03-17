import { useContext } from 'react';

import { Theme } from '../../const';

import { ThemeContext } from '../theme-provider/theme-provider';

export const Fallback = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === Theme.Dark ? 'text-white' : ''
      } min-h-screen flex flex-col justify-center items-center`}
    >
      <h1 className="text-center text-3xl">Loading...</h1>
    </div>
  );
};
