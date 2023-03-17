import { useContext } from 'react';

import { Theme } from '../../const';

import { ReactComponent as DarkThemeIcon } from '../../assets/dark-theme-icon.svg';
import { ReactComponent as LightThemeIcon } from '../../assets/light-theme-icon.svg';

import { ThemeContext } from '../theme-provider/theme-provider';
import { Toggler } from '../toggler/toggler';

export const ThemeControl = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="flex gap-3 items-center"
      title={theme === Theme.Dark ? 'Enable light theme' : 'Enable dark theme'}
    >
      <Toggler onToggle={toggleTheme} checked={theme === Theme.Dark} />

      {theme === Theme.Dark ? (
        <DarkThemeIcon width="25" height="25" />
      ) : (
        <LightThemeIcon width="25" height="25" />
      )}
    </div>
  );
};
