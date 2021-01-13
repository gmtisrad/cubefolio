import React from "react";
import { aboutMePageStyles } from "./standardStyles";
import AboutMe from "../../src/client/components/slides/AboutMe";

export const AboutMePage: React.FC = () => {
  return (
    <div className={aboutMePageStyles}>
      <AboutMe />
    </div>
  );
};

export default AboutMePage;
