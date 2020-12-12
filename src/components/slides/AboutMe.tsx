import React, { useEffect, useContext, useState } from "react";
import { cx, css } from "@emotion/css";
import ThemeContext from "../../context/ThemeContext";
import { getTextColor } from "../../utils/styleUtils";
import { introWrapperStyle } from "./IntroSlide";
import { MyAvatar } from "../../assets/MyAvatar";

export const AboutMe: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const aboutMeWrapperStyle = css`
    text-align: left;
    padding: 30px;
    font-size: 16px;
    flex-direction: row;
    justify-content: space-between;
  `;

  const infoContainerStyle = css`
    width: 50%;
    .skills-info {
      margin: 0 20px 0 0;
    }
    ul {
      columns: 2;
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0 auto;
    }
  `;

  const avatarContainer = css`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div
      className={cx(
        introWrapperStyle(textColor),
        aboutMeWrapperStyle,
        "about-me-wrapper"
      )}
    >
      <div className={avatarContainer}>
        <MyAvatar />
      </div>
      <div className={infoContainerStyle}>
        <p>
          I'm a software engineer based in Portland, OR specializing in fulll
          stack web development and devops on AWS.
        </p>
        <p>
          My passion lies in coming up with simple solutions to complex problems
          on the back end, front end, and everywhere in between.
        </p>
        <p>
          Currently, I'm working with Nike to maintain and overhaul their
          product customization platform built with React on the front end and
          SpringBoot on the back end.
        </p>
        <div className="skills-info">
          <p>Here's what I've been working with recently:</p>
          <ul>
            <li>JS(ES6+)</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>React 17</li>
            <li>Redux</li>
            <li>Spring Boot</li>
            <li>WordPress</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
