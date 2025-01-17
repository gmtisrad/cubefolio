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

const contentStyle = css`
  flex: 1;
  overflow: auto;
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
`;

export const MyExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experience = [
    'StreamYard - Senior Full-Stack Engineer (Growth)',
    'Nike - Senior Applications Engineer',
    'Parthenon Software Group - Software Developer',
  ];

  const myExperienceBodyStyle = (isParth: boolean): string => css`
    flex: 1;
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
    <div className={myExperienceContainerstyle}>
      <div className={myExperienceWrapperStyle}>
        <div className={cx('top-nav', topNavStyle)}>
          <div className={cx('top-nav-tabs', topNavTabsStyle)}>
            {experience.map((job, idx) => (
              <Tab
                key={job}
                name={job}
                active={idx === activeIndex}
                switchTab={(): void => setActiveIndex(idx)}
              />
            ))}
          </div>
          <div className={cx('top-nav-controls', topNavControlsStyle)}>
            <div className={cx('top-nav-close-button', topNavCloseStyle)}>
              &times;
            </div>
          </div>
        </div>
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
