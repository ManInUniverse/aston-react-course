import React, { PropsWithChildren, useState } from 'react';

import { Theme } from '../../const';

type ContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ContextType>({
  theme: Theme.Light,
  toggleTheme: () => {},
});

type Props = PropsWithChildren<{
  children: JSX.Element;
}>;

export const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === Theme.Dark ? Theme.Light : Theme.Dark));
  };

  document.body.style.backgroundColor = theme === Theme.Dark ? '#01012A' : 'transparent';

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
