import React from "react";
import { landingPageStyles } from "./standardStyles";
import TerminalIntro from "../slides/TerminalIntro";

export const LandingPage: React.FC = () => {
  return (
    <div className={landingPageStyles}>
      <TerminalIntro />
    </div>
  );
};

export default LandingPage;
