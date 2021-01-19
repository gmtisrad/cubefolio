/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useContext, useState } from "react";
import { cx } from "@emotion/css";
import ThemeContext from "../../context/ThemeContext";
import { getTextColor } from "../../utils/styleUtils";
import { introWrapperStyle } from "./IntroSlide";
import { MyAvatar } from "../../../client/assets/MyAvatar";
import { ContactIcons } from "../ContactIcons";
import {
  aboutMeWrapperStyle,
  avatarContainer,
  infoContainerStyle,
} from "../../styles";

export const AboutMe: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

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
        <ContactIcons />
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
