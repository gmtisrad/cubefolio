import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { css } from "@emotion/css";

interface ThemeSwitcherProps {}

const themeSwitcherButtonStyle = css`
  position: absolute;
  top: 10px;
  left: 10px;
  border: 2px solid white;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  color: inherit;
  font-weight: 600;
  cursor: pointer;
  z-index: 99;
`;

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={themeSwitcherButtonStyle} onClick={() => toggle()}>
      Switch Themes
    </div>
  );
};

export default ThemeSwitcher;
