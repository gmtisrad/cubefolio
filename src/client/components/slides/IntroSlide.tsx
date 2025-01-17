import React, { useContext, useState, useEffect } from 'react';
import { css } from '@emotion/css';
import ThemeContext from '../../context/ThemeContext';
import { getTextColor } from '../../utils/styleUtils';

type Props = {
  name: string;
  tagline: string;
  message: string;
};

export const introWrapperStyle = (borderColor: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 2em;
  @media (max-width: 568px) {
    height: auto;
  }
`;

export const IntroSlide: React.FC<Props> = (props: Props) => {
  const { name, tagline, message } = props;
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const titlePageStyle = css`
    padding: 120px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${textColor};
    .intro-introduction {
      font-size: 24px;
      margin-bottom: 1rem;
      color: #e5e5e5;
      font-weight: 600;
    }
    .intro-name {
      font-size: 60px;
      margin-bottom: 1rem;
      margin-left: 1rem;
      font-weight: 600;
      text-shadow: ${textColor} 0px 0px 3px;
    }
    .intro-tagline {
      font-size: 42px;
      margin-bottom: 1rem;
      margin-left: 2rem;
      color: #e5e5e5;
      font-weight: 600;
    }
    .intro-message {
      font-size: 24px;
      margin-bottom: 1rem;
      margin-left: 3rem;
      color: #e5e5e5;
      font-weight: 400;
    }
  `;
  return (
    <div className={titlePageStyle}>
      <span className="intro-introduction">Hi, my name is</span>
      <span className="intro-name">{name}</span>
      <span className="intro-tagline">{tagline}</span>
      <span className="intro-message">{message}</span>
    </div>
  );
};
