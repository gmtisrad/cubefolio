import React from "react";
import { myExperiencePageStyle } from "./standardStyles";
import MyExperience from "../slides/MyExperience";

export const MyExperiencePage: React.FC = () => {
  return (
    <div className={myExperiencePageStyle}>
      <MyExperience />
    </div>
  );
};

export default MyExperiencePage;
