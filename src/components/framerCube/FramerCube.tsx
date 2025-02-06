import React, { useState, useEffect, useContext, useMemo } from 'react';
import { css, cx } from '@emotion/css';
import { getCurrentStyle, getTextColor } from '../../utils/styleUtils';
import ThemeContext from '../../context/ThemeContext';
import AboutMe from '../slides/AboutMe';
import TerminalIntro from '../slides/TerminalIntro';
import MyExperience from '../slides/MyExperience';
import { columnContainerStyles } from '../../styles';
import { Controls } from '../Controls';
import CubeWrapper from '../CubeWrapper';
import CurrentNikeTab from '../slides/CurrentNikeTab';
import NikeTab from '../slides/NikeTab';
import StreamYardTab from '../slides/StreamYardTab';
import ParthenonTab from '../slides/ParthenonTab';

// Calculate cube size based on viewport dimensions
const getCubeSize = () => {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const minSize = Math.min(vh, vw);
  // Use a smaller percentage and add a max size constraint
  return `${Math.min(minSize * 0.7, 800)}px`;
};

const cubeStyles = css`
  perspective: 2000px;
  transform-style: preserve-3d;
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  overflow: hidden;
`;

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState('');
  const [textColor, setTextColor] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(0);
  const [cubeSize, setCubeSize] = useState(getCubeSize());

  // Update cube size on window resize
  useEffect(() => {
    const handleResize = () => {
      setCubeSize(getCubeSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageStyles = useMemo(
    () => css`
      position: absolute;
      width: ${cubeSize};
      height: ${cubeSize};
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      backface-visibility: hidden;
      background: transparent;
      transform-origin: center center;
    `,
    [cubeSize],
  );

  const frameStyles = useMemo(
    () => css`
      position: absolute;
      width: ${cubeSize};
      height: ${cubeSize};
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      background: transparent;

      /* Center the content within each face */
      display: flex;
      align-items: center;
      justify-content: center;

      /* Ensure content doesn't bleed */
      & > * {
        width: 100%;
        height: 100%;
        overflow: auto;
      }

      /* Style the cube wrapper content */
      & > div {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        /* Re-enable pointer events for interactive elements */
        a,
        button,
        [role='button'] {
          pointer-events: auto;
          position: relative;
          z-index: 1500;
        }
      }
    `,
    [cubeSize],
  );

  // Face styles with dynamic cube size
  const frontFaceStyles = useMemo(
    () => css`
      transform: translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const backFaceStyles = useMemo(
    () => css`
      transform: rotateY(180deg) translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const rightFaceStyles = useMemo(
    () => css`
      transform: rotateY(90deg) translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const leftFaceStyles = useMemo(
    () => css`
      transform: rotateY(-90deg) translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const topFaceStyles = useMemo(
    () => css`
      transform: rotateX(-90deg) translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const bottomFaceStyles = useMemo(
    () => css`
      transform: rotateX(90deg) translateZ(calc(${cubeSize} / 2));
    `,
    [cubeSize],
  );

  const getPageTransform = (index: number, isVertical = false) => css`
    transform: ${isVertical
      ? `rotateX(${(index - 1) * 90}deg)`
      : `rotateY(${index * -90}deg)`};
  `;

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <>
      <Controls
        currentIndex={currentIndex}
        verticalIndex={verticalIndex}
        setCurrentIndex={setCurrentIndex}
        setVerticalIndex={setVerticalIndex}
        shouldBlend={true}
      />
      <div className={cx(columnContainerStyles(textColor))}>
        <div className={cubeStyles}>
          {/* Horizontal rotation container */}
          <div className={cx(pageStyles, getPageTransform(currentIndex))}>
            {/* Vertical rotation container */}
            <div
              className={cx(pageStyles, getPageTransform(verticalIndex, true))}
            >
              {/* Front face - About Me */}
              <div id="about-me" className={cx(frameStyles, frontFaceStyles)}>
                <CubeWrapper themeStyle={currentStyle}>
                  <AboutMe />
                </CubeWrapper>
              </div>
              {/* Top face - Current Nike Experience */}
              <div id="current-nike" className={cx(frameStyles, topFaceStyles)}>
                <CubeWrapper themeStyle={currentStyle}>
                  <CurrentNikeTab />
                </CubeWrapper>
              </div>
              {/* Bottom face - Terminal */}
              <div
                id="terminal-intro"
                className={cx(frameStyles, bottomFaceStyles)}
              >
                <CubeWrapper themeStyle={currentStyle}>
                  <TerminalIntro />
                </CubeWrapper>
              </div>
            </div>
            {/* Right face - Previous Nike Experience */}
            <div
              id="previous-nike"
              className={cx(frameStyles, rightFaceStyles)}
            >
              <CubeWrapper themeStyle={currentStyle}>
                <NikeTab />
              </CubeWrapper>
            </div>
            {/* Back face - StreamYard Experience */}
            <div id="streamyard" className={cx(frameStyles, backFaceStyles)}>
              <CubeWrapper themeStyle={currentStyle}>
                <StreamYardTab />
              </CubeWrapper>
            </div>
            {/* Left face - Parthenon Experience */}
            <div id="parthenon" className={cx(frameStyles, leftFaceStyles)}>
              <CubeWrapper themeStyle={currentStyle}>
                <ParthenonTab />
              </CubeWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramerCube;
