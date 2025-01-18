import React, { useState, useEffect, useContext, useMemo } from 'react';
import { css, cx } from '@emotion/css';
import { getCurrentStyle, getTextColor } from '../../utils/styleUtils';
import ThemeContext from '../../context/ThemeContext';
import AboutMe from '../slides/AboutMe';
import TerminalIntro from '../slides/TerminalIntro';
import MyExperience from '../slides/MyExperience';
import ContactMe from '../slides/ContactMe';
import { columnContainerStyles } from '../../styles';
import { Controls } from '../Controls';
import CubeWrapper from '../CubeWrapper';
import { Project } from '../Project';
import MovieGraphImage from '../../assets/MovieGraphImg.webp';
import webcrawler from '../../assets/webcrawler.png';

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
        setVerticalIndex={setVerticalIndex}
        setCurrentIndex={setCurrentIndex}
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
              {/* Top face - Experience */}
              <div
                id="my-experience"
                className={cx(frameStyles, frontFaceStyles)}
              >
                <CubeWrapper themeStyle={currentStyle}>
                  <MyExperience />
                </CubeWrapper>
              </div>
              {/* Front face - About Me */}
              <div id="about-me" className={cx(frameStyles, topFaceStyles)}>
                <CubeWrapper themeStyle={currentStyle}>
                  <AboutMe />
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
            {/* Right face - PyChat Project */}
            <div id="pychat" className={cx(frameStyles, rightFaceStyles)}>
              <CubeWrapper themeStyle={currentStyle}>
                <Project
                  key="MovieGraph"
                  projectName="MovieGraph"
                  projectDescription="MovieGraph is a high-performance GO application that generates a graph database from IMDB's non-commercial datasets, creating connections between movies and the people who worked on them."
                  projectImage={MovieGraphImage}
                  projectLink="https://github.com/gmtisrad/movie-graph"
                />
              </CubeWrapper>
            </div>
            {/* Back face - sPYder Project */}
            <div id="spyder" className={cx(frameStyles, backFaceStyles)}>
              <CubeWrapper themeStyle={currentStyle}>
                <Project
                  key="sPYder"
                  projectName="sPYder"
                  projectDescription="sPYder is an uber fast threaded web crawler that allows you to configure the depth of the crawl and whether or not to download the assets on the page. All of that in under 100 lines of python!"
                  projectImage={webcrawler}
                  projectLink="https://github.com/gmtisrad/web_crawler"
                />
              </CubeWrapper>
            </div>
            {/* Left face - Contact Me */}
            <div id="contact-me" className={cx(frameStyles, leftFaceStyles)}>
              <CubeWrapper themeStyle={currentStyle}>
                <ContactMe />
              </CubeWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramerCube;
