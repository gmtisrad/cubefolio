import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import ThemeContext from '../../context/ThemeContext';
import { getBackgroundColor, getTextColor } from '../../utils/styleUtils';

const tabContentStyles = (backgroundColor: string, textColor: string) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${backgroundColor};
  color: ${textColor};
  padding: 20px;

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
  margin-bottom: 20px;

  h3 {
    margin: 15px 0 8px;
    font-size: 20px;
  }

  span {
    font-size: 14px;
    opacity: 0.9;
  }
`;

const tabInfoStyles = css`
  text-align: center;
  padding: 15px;
  font-size: 15px;
  line-height: 1.6;
  max-width: 1000px;
  margin: 0 auto;
`;

const tabProjectStyles = (backgroundColor: string) => css`
  width: 100%;
  background-color: ${backgroundColor === '#1a1a1a'
    ? '#2a2a2a'
    : 'rgba(255, 255, 255, 0.1)'};
  padding: 25px 15px;
  margin-top: 20px;
  border-radius: 8px;
`;

const logoStyles = css`
  height: 45px;
  width: auto;
  margin: 10px 0;
`;

const achievementListStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 30px;
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 20px;
  list-style-type: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  li {
    position: relative;
    padding-left: 20px;
    text-align: justify;
    hyphens: auto;
    margin-bottom: 10px;
    line-height: 1.4;

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
}

export const BaseExperienceTab: React.FC<BaseExperienceTabProps> = ({
  companyName,
  role,
  period,
  logoSrc,
  description,
  achievements,
}) => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={tabContentStyles(backgroundColor, textColor)}>
      <header className={tabHeaderStyles}>
        <img src={logoSrc} alt={`${companyName} logo`} className={logoStyles} />
        <h3>{companyName}</h3>
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
