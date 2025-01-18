import React, { useState } from 'react';
import { css, cx } from '@emotion/css';
import {
  myExperienceContainerstyle,
  myExperienceWrapperStyle,
  topNavStyle,
  topNavTabsStyle,
  topNavControlsStyle,
  topNavCloseStyle,
} from './slidesStyles';
import Tab from '../Tab';
import ParthenonTab from './ParthenonTab';
import NikeTab from './NikeTab';
import StreamYardTab from './StreamYardTab';

const experienceStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
`;

const contentContainerStyles = css`
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const contentStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0;
  margin: 0;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const tabTitleStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  font-size: 12px;
`;

export const MyExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experience = [
    'StreamYard - Senior Full-Stack Engineer (Growth)',
    'Nike - Senior Applications Engineer',
    'Parthenon Software Group - Software Developer',
  ];

  const myExperienceBodyStyle = (isParth: boolean): string => css`
    height: 100%;
    width: 100%;
    overflow: auto;
    ${isParth ? 'background: linear-gradient(135deg, #284b67, #2f5e79);' : ''}
    display: flex;
    flex-direction: column;
  `;

  const tabs = [
    <StreamYardTab key={0} />,
    <NikeTab key={1} />,
    <ParthenonTab key={2} />,
  ];

  return (
    <div className={experienceStyles}>
      <div className={topNavStyle}>
        <div className={topNavTabsStyle}>
          {experience.map((job, idx) => (
            <Tab
              key={job}
              name={<div className={tabTitleStyle}>{job}</div>}
              active={idx === activeIndex}
              switchTab={(): void => setActiveIndex(idx)}
            />
          ))}
        </div>
        <div className={topNavControlsStyle}>
          <div className={topNavCloseStyle}>&times;</div>
        </div>
      </div>
      <div className={contentContainerStyles}>
        <div
          className={cx(
            'my-experience-body',
            myExperienceBodyStyle(activeIndex === 2),
            contentStyle,
          )}
        >
          {tabs[activeIndex]}
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
