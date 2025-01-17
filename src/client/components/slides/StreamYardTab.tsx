import React from 'react';
import { css, cx } from '@emotion/css';
import {
  parthenonBodyStyle,
  parthenonHeaderStyle,
  parthInfo,
  projectsStyle,
  projectCardsStyle,
} from './slidesStyles';
import StreamYardLogo from '../../assets/StreamYardLogo.png';

const streamYardStyles = css`
  background: #ffffff;
  color: #121212;
  padding: 20px;
  overflow-y: auto;
`;

const streamYardHeaderStyles = css`
  ${parthenonHeaderStyle};
  h3 {
    color: #121212;
    font-size: 24px;
    font-weight: 700;
  }
  span {
    color: #666;
    opacity: 1;
    font-size: 14px;
  }
`;

const streamYardInfoStyles = css`
  ${parthInfo};
  color: #121212;
  max-width: 800px;
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 800;
    margin: 15px 0;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
    line-height: 1.5;
    margin: 12px 0;
    color: #666;
  }
`;

const streamYardProjectStyles = css`
  ${projectsStyle};
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  color: #121212;
  padding: 25px 20px;

  h4 {
    color: #121212;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    max-width: 700px;
    margin: 0 auto;

    li {
      margin: 12px 0;
      padding-left: 24px;
      position: relative;
      color: #444;
      font-size: 14px;
      line-height: 1.5;

      &:before {
        content: '•';
        color: #1a73e8;
        position: absolute;
        left: 8px;
        font-size: 16px;
        top: -1px;
      }
    }
  }
`;

const logoStyles = css`
  height: 45px;
  width: auto;
`;

const streamYardDuties = [
  'Implemented a drag and drop system for producers to manage and order their assets during live-streams',
  'Designed and Implemented a hotkey system, improving accessibility in our application',
  'Instrumented our platform with Segment, Amplitude, and various other analytics platforms to track KPIs',
  'Worked closely with project manager to run A/B tests and optimize KPIs',
  "Reduced churn by modifying the 'unsubscribe flow'",
  'Owned all OAuth integrations',
  'Debugged FFmpeg and WebRTC integrations',
  'Developed all features with full accessibility in mind',
];

export const StreamYardTab: React.FC = () => {
  return (
    <div
      className={cx('streamyard-body', parthenonBodyStyle, streamYardStyles)}
    >
      <div className={cx('streamyard-header', streamYardHeaderStyles)}>
        <img
          src={StreamYardLogo}
          alt="StreamYard Logo"
          className={logoStyles}
        />
        <h3>StreamYard | Hopin</h3>
        <span>March 2021 - April 2022</span>
        <div className={streamYardInfoStyles}>
          <h2>The easiest way to live stream and record</h2>
          <p>
            StreamYard is a professional live streaming and recording studio in
            your browser. As a Senior Full-Stack Engineer on the Growth team, I
            focused on implementing key features to enhance user experience and
            platform analytics.
          </p>
          <p>
            My work spanned from improving live-stream production tools to
            optimizing platform metrics and ensuring accessibility across all
            features. I worked closely with product and design teams to create
            intuitive solutions for complex streaming workflows.
          </p>
        </div>
        <div className={streamYardProjectStyles}>
          <div className={projectCardsStyle}>
            <div>
              <h4>Key Achievements</h4>
              <ul>
                {streamYardDuties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamYardTab;
