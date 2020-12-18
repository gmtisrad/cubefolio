import React from "react";
import { aboutMePageStyles } from "./standardStyles";
import AboutMe from "../slides/AboutMe";

export const AboutMePage: React.FC = () => {
  return (
    <div className={aboutMePageStyles}>
      <AboutMe />
    </div>
  );
};

export default AboutMePage;
