/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useContext, useState } from 'react';
import { cx } from '@emotion/css';
import ThemeContext from '../../context/ThemeContext';
import { getTextColor } from '../../utils/styleUtils';
import { introWrapperStyle } from './IntroSlide';
import { MyAvatar } from '../../assets/MyAvatar';
import { ContactIcons } from '../ContactIcons';
import {
  aboutMeWrapperStyle,
  avatarContainer,
  infoContainerStyle,
} from '../../styles';

export const AboutMe: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div
      className={cx(
        introWrapperStyle(textColor),
        aboutMeWrapperStyle,
        'about-me-wrapper',
      )}
    >
      <div className={avatarContainer}>
        <MyAvatar />
        <ContactIcons />
      </div>
      <div className={infoContainerStyle}>
        <p>I&apos;m a software engineer based in the Portland, Oregon area!</p>
        <p>
          My passion lies in coming up with simple solutions to complex problems
          on the back end, front end, and everywhere in between.
        </p>
        <p>
          Currently, I&apos;m contributing to Nike&apos;s Digital Product
          Creation team, developing tools that enhance the product design and
          development process. I focus on building seamless collaboration
          experiences for global design teams.
        </p>
        <div className="skills-info">
          <p>Here&apos;s what I&apos;ve been working with recently:</p>
          <ul>
            <li>SSR</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>AWS</li>
            <li>TailwindCSS</li>
            <li>Pendo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
