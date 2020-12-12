import React, { useState } from "react";
import { css, cx, keyframes } from "@emotion/css";
import {
  topNavTabStyle,
  activeTabStyle,
  myExperienceContainerstyle,
  myExperienceWrapperStyle,
  topNavStyle,
  topNavTabsStyle,
  topNavControlsStyle,
  topNavCloseStyle,
} from "./slidesStyles";
import Tab from "../Tab";
import ParthenonTab from "./ParthenonTab";
import NikeTab from "./NikeTab";

export const MyExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experience = [
    "Parthenon Software Group - Software Developer",
    "Nike - Senior Applications Engineer",
  ];

  const myExperienceBodyStyle = css`
    height: calc(100% - 40px);
    width: 100%;
    overflow: auto;
    margin-top: 40px;
  `;

  const tabs = [<ParthenonTab key={0} />, <NikeTab key={1} />];

  return (
    <div className={myExperienceContainerstyle}>
      <div className={myExperienceWrapperStyle}>
        <div className={cx("top-nav", topNavStyle)}>
          <div className={cx("top-nav-tabs", topNavTabsStyle)}>
            {experience.map((job, idx) => (
              <Tab
                key={job}
                name={job}
                active={idx === activeIndex}
                switchTab={(): void => setActiveIndex(idx)}
              />
            ))}
          </div>
          <div className={cx("top-nav-controls", topNavControlsStyle)}>
            <div className={cx("top-nav-close-button", topNavCloseStyle)}>
              &times;
            </div>
          </div>
        </div>
        <div className={cx("my-experience-body", myExperienceBodyStyle)}>
          {tabs[activeIndex]}
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
