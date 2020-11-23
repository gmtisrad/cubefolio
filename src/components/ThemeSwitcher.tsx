import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { css } from "@emotion/css";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";

interface ThemeSwitcherProps {}

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
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  z-index: 99;
`;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { toggle } = useContext(ThemeContext);
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div
      className={themeSwitcherButtonStyle(backgroundColor, textColor)}
      onClick={() => toggle()}
    >
      Switch Themes
    </div>
  );
};

export default ThemeSwitcher;
