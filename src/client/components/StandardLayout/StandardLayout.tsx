import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { getCurrentStyle } from "../../utils/styleUtils";
import { standardLayoutStyles, standardBodyStyle } from "./standardStyles";
import { cx } from "@emotion/css";
import LandingPage from "./LandingPage";
import AboutMePage from "./AboutMePage";
import MyExperiencePage from "./MyExperiencePage";

export const StandardLayout: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState("");

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={cx("standard-root", standardLayoutStyles, currentStyle)}>
      {/* <StandardTopNav /> */}
      <div className={cx("standard-body", standardBodyStyle)}>
        <LandingPage />
        <AboutMePage />
        <MyExperiencePage />
      </div>
    </div>
  );
};

export default StandardLayout;
