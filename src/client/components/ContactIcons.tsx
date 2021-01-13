import { css } from "@emotion/css";
import React, { useContext, useEffect, useState } from "react";
import { Github, Linkedin, Codepen } from "@styled-icons/fa-brands";
import { getTextColor } from "../utils/styleUtils";
import ThemeContext from "../context/ThemeContext";

export const contactIconsStyle = (iconColor: string) => css`
  display: flex;
  justify-content: center;
  margin-top: 75px;
  svg {
    height: 50px;
    margin: 0 10px;
    color: ${iconColor};
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const GithubIcon: React.FC = () => {
  return (
    <a href="https://github.com/gmtisrad/">
      <Github />
    </a>
  );
};

export const LinkedinIcon: React.FC = () => {
  return (
    <a href="https://www.linkedin.com/in/gabe-m-timm">
      <Linkedin />
    </a>
  );
};

export const CodepenIcon: React.FC = () => {
  return (
    <a href="https://codepen.io/Gabe_M_Timm">
      <Codepen />
    </a>
  );
};

export const ContactIcons: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={contactIconsStyle(textColor)}>
      <GithubIcon />
      <LinkedinIcon />
      <CodepenIcon />
    </div>
  );
};
