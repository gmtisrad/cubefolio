import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import {
  getCurrentStyle,
  getBackgroundColor,
  getTextColor,
} from "../../utils/styleUtils";
import { standardLayoutStyles, standardBodyStyle } from "./standardStyles";
import { cx } from "@emotion/css";
import StandardTopNav from "./StandardTopNav";
import LandingPage from "./LandingPage";
import AboutMe from "../slides/AboutMe";

export const StandardLayout: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState("");

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={cx("standard-root", standardLayoutStyles, currentStyle)}>
      <StandardTopNav />
      <div className={cx("standard-body", standardBodyStyle)}>
        <LandingPage />
        <AboutMe />
      </div>
    </div>
  );
};

export default StandardLayout;
