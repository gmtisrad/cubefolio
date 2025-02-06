import React, { useContext, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';
import ThemeContext from '../../context/ThemeContext';
import { getBackgroundColor, getTextColor } from '../../utils/styleUtils';

const tabContentStyles = (backgroundColor: string, textColor: string) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: ${backgroundColor};
  color: ${textColor};
  padding: 15px;

  * {
    color: ${textColor};
  }
`;

const tabHeaderStyles = css`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 12px;
  flex-shrink: 0;

  h3 {
    margin: 8px 0 4px;
    font-size: 18px;
  }

  span {
    font-size: 13px;
    opacity: 0.9;
    line-height: 1.3;
  }
`;

const tabInfoStyles = css`
  text-align: center;
  padding: 10px;
  font-size: 14px;
  line-height: 1.4;
  max-width: 1000px;
  margin: 0 auto;
  flex-shrink: 0;
`;

const tabProjectStyles = (backgroundColor: string) => css`
  width: 100%;
  background-color: ${backgroundColor === '#1a1a1a'
    ? '#2a2a2a'
    : 'rgba(255, 255, 255, 0.1)'};
  padding: 0px 12px;
  border-radius: 6px;
`;

const logoStyles = css`
  height: 50px;
  width: auto;
`;

const achievementListStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
  max-width: 1000px;
  margin: 0px auto 0;
  padding: 0 15px;
  list-style-type: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  li {
    position: relative;
    padding-left: 15px;
    text-align: justify;
    hyphens: auto;
    margin-bottom: 4px;
    line-height: 1.3;
    font-size: 13px;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-100%);
    }
  }
`;

interface BaseExperienceTabProps {
  companyName: string;
  role: string;
  period: string;
  logoSrc: string;
  description: string;
  achievements: string[];
  logoClassName?: string;
}

export const BaseExperienceTab: React.FC<BaseExperienceTabProps> = ({
  companyName,
  role,
  period,
  logoSrc,
  description,
  achievements,
  logoClassName,
}: BaseExperienceTabProps) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setBackgroundColor(getBackgroundColor());
    setTextColor(getTextColor());
  }, []);

  return (
    <div className={tabContentStyles(backgroundColor, textColor)}>
      <header className={tabHeaderStyles}>
        <img
          src={logoSrc}
          alt={`${companyName} logo`}
          className={cx(logoStyles, logoClassName)}
        />
        <h3>{companyName}</h3>
        <span
          className={css`
            font-weight: 600;
            margin-bottom: 4px;
          `}
        >
          {role}
        </span>
        <span>{period}</span>
      </header>

      <div className={tabInfoStyles}>
        <p>{description}</p>
      </div>

      <div className={tabProjectStyles(backgroundColor)}>
        <h4 style={{ textAlign: 'center', marginBottom: '15px' }}>
          Key Achievements
        </h4>
        <ul className={achievementListStyles}>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BaseExperienceTab;
