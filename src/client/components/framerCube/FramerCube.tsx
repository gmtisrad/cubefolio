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

const CUBE_SIZE = '80vh';

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
`;

const pageStyles = css`
  position: absolute;
  width: ${CUBE_SIZE};
  height: ${CUBE_SIZE};
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  background: transparent;
`;

const frameStyles = css`
  position: absolute;
  width: ${CUBE_SIZE};
  height: ${CUBE_SIZE};
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

    /* Ensure text content is properly sized */
    font-size: calc(${CUBE_SIZE} * 0.04);
    line-height: 1.5;

    /* Re-enable pointer events for interactive elements */
    a,
    button,
    [role='button'] {
      pointer-events: auto;
      position: relative;
      z-index: 1500;
    }
  }
`;

// Front face (no rotation needed)
const frontFaceStyles = css`
  transform: translateZ(calc(${CUBE_SIZE} / 2));
`;

// Back face (rotated 180 degrees around Y axis)
const backFaceStyles = css`
  transform: rotateY(180deg) translateZ(calc(${CUBE_SIZE} / 2));
`;

// Right face (rotated 90 degrees around Y axis)
const rightFaceStyles = css`
  transform: rotateY(90deg) translateZ(calc(${CUBE_SIZE} / 2));
`;

// Left face (rotated -90 degrees around Y axis)
const leftFaceStyles = css`
  transform: rotateY(-90deg) translateZ(calc(${CUBE_SIZE} / 2));
`;

// Top face (rotated -90 degrees around X axis)
const topFaceStyles = css`
  transform: rotateX(-90deg) translateZ(calc(${CUBE_SIZE} / 2));
`;

// Bottom face (rotated 90 degrees around X axis)
const bottomFaceStyles = css`
  transform: rotateX(90deg) translateZ(calc(${CUBE_SIZE} / 2));
`;

const getPageTransform = (index: number, isVertical = false) => css`
  transform: ${isVertical
    ? `rotateX(${(index - 1) * 90}deg)`
    : `rotateY(${index * -90}deg)`};
`;

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState('');
  const [textColor, setTextColor] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(0);

  const pageWidth = useMemo(() => {
    return window.outerHeight > window.outerWidth ? '100vw' : '100vh';
  }, []);

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
