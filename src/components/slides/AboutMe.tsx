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
    text-align: center;
    padding: 40px 110px;
    font-size: 22px;
    span {
      text-shadow: none;
    }
    h1 {
      text-shadow: none;
    }
  `;

  return (
    <div
      className={cx(
        introWrapperStyle(textColor),
        aboutMeWrapperStyle,
        "about-me-wrapper"
      )}
    >
      <MyAvatar />
      <h1>Gabe Timm</h1>
      <span>
        I'm a software engineer based in Portland, OR specializing in building
        exceptional websites, applications, and everything in between. I'm
        passionate about coming up with simple solutions to complex problems on
        the front and back end!
      </span>
    </div>
  );
};

export default AboutMe;
