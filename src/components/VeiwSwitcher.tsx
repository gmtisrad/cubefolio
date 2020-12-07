import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { css } from "@emotion/css";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";

const viewSwitcherButtonStyle = (
  backgroundColor: string,
  textColor: string
): string => css`
  position: absolute;
  top: 70px;
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

export const ViewSwitcher: React.FC = () => {
  const { toggleView, standardView } = useContext(ThemeContext);
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const handleClick = (): void => {
    toggleView();
  };

  return (
    <div
      className={viewSwitcherButtonStyle(backgroundColor, textColor)}
      onClick={handleClick}
    >
      {standardView ? "3D View" : "Standard View"}
    </div>
  );
};

export default ViewSwitcher;
