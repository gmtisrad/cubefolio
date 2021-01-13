import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { themeSwitcherButtonStyle } from "../styles";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";

export const ThemeSwitcher: React.FC = () => {
  const { toggleStyle } = useContext(ThemeContext);
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const handleClick = (): void => {
    toggleStyle();
  };

  return (
    <div
      className={themeSwitcherButtonStyle(backgroundColor, textColor)}
      onClick={handleClick}
    >
      Switch Themes
    </div>
  );
};

export default ThemeSwitcher;
