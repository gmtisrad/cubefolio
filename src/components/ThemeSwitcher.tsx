import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { themeSwitcherButtonStyle } from '../styles';
import { getBackgroundColor, getTextColor } from '../utils/styleUtils';

export const ThemeSwitcher: React.FC = () => {
  const { toggleStyle, light, dark } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(!light, !dark));
    setTextColor(getTextColor(!light, !dark));
  }, [light, dark]);

  const handleClick = (): void => {
    toggleStyle();
  };

  return (
    <div
      className={themeSwitcherButtonStyle(backgroundColor, textColor)}
      onClick={handleClick}
    >
      {light ? 'Dark Mode' : 'Light Mode'}
    </div>
  );
};

export default ThemeSwitcher;
