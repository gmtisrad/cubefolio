import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { css } from "@emotion/css";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";

const themeSwitcherButtonStyle = (
  backgroundColor: string,
  textColor: string
): string => css`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${backgroundColor};
  border: 2px solid ${textColor};
  color: ${textColor};
  padding: 5pxinterface ThemeSwitcherProps {};
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  z-index: 99;
`;

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
