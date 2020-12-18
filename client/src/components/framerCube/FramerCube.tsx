import React, { useState, useEffect, useContext } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "@styled-icons/boxicons-solid";
import { css, cx } from "@emotion/css";
import { Frame, Page } from "framer";
import {
  getCurrentStyle,
  getBackgroundColor,
  getTextColor,
} from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";
import TitleSlide from "../slides/TitleSlide";
import AboutMe from "../slides/AboutMe";
import TerminalIntro from "../slides/TerminalIntro";
import MyExperience from "../slides/MyExperience";

const MAX_HORIZONTAL_SIDES = 4;
const MAX_VERTICAL_SIDES = 3;

const columnContainerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    height: 100vh;
    width: 100vh;
  }

  @media (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
`;

const upButtonStyle = css`
  position: absolute;
  top: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  mix-blend-mode: difference;
`;

const downButtonStyle = css`
  position: absolute;
  bottom: 5px;
  width: 100px;
  z-index: 100;
  display: flex;
  justify-content: center;
  cursor: pointer;
  mix-blend-mode: difference;
`;

const leftButtonStyle = css`
  position: absolute;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 5px;
  z-index: 100;
  cursor: pointer;
  mix-blend-mode: difference;
`;

const rightButtonStyle = css`
  position: absolute;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 5px;
  z-index: 100;
  cursor: pointer;
  mix-blend-mode: difference;
`;

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(0);

  const pageWidth = (() => {
    return window.outerHeight > window.outerWidth ? "100vw" : "100vh";
  })();

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const upFromCurrent = (): void => {
    setVerticalIndex(verticalIndex - 1);
  };

  const downFromCurrent = (): void => {
    setVerticalIndex(verticalIndex + 1);
  };

  const rightFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const leftFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex - 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const UpButton: React.FC = () => {
    return (
      <div className={upButtonStyle} onClick={upFromCurrent}>
        <ChevronUp size="36" />
      </div>
    );
  };

  const DownButton: React.FC = () => {
    return (
      <div className={downButtonStyle} onClick={downFromCurrent}>
        <ChevronDown size="36" />
      </div>
    );
  };

  const LeftButton: React.FC = () => {
    return (
      <div className={leftButtonStyle} onClick={leftFromCurrent}>
        <ChevronLeft size="36" />
      </div>
    );
  };

  const RightButton: React.FC = () => {
    return (
      <div className={rightButtonStyle} onClick={rightFromCurrent}>
        <ChevronRight size="36" />
      </div>
    );
  };

  const Controls: React.FC = () => {
    return (
      <div
        className={css`
          position: absolute;
          height: 100px;
          width: 100px;
          right: 0;
          bottom: 0;
        `}
      >
        {verticalIndex !== 0 && currentIndex === 0 && <UpButton />}
        {verticalIndex < MAX_VERTICAL_SIDES - 1 && currentIndex === 0 && (
          <DownButton />
        )}
        {currentIndex !== 0 && verticalIndex === 1 && <LeftButton />}
        {currentIndex < MAX_HORIZONTAL_SIDES - 1 && verticalIndex === 1 && (
          <RightButton />
        )}
      </div>
    );
  };

  const CubeWrapper = (props: any) => {
    const { themeStyle } = props;
    const cubeFaceStyle = css`
      height: 100%;
      width: 100%;
      background-color: ${backgroundColor};
      overflow-y: auto;
    `;
    return (
      <div className={cx("cube-face-wrapper", cubeFaceStyle, themeStyle)}>
        {props.children}
      </div>
    );
  };

  return (
    <div
      className={cx(
        css`
          color: ${textColor};
        `,
        columnContainerStyles
      )}
    >
      <Page
        height={"100vh"}
        width={pageWidth}
        alignment="center"
        gap={0}
        defaultEffect={"cube"}
        backgroundColor="transparent"
        currentPage={currentIndex}
        dragEnabled={false}
      >
        <Page
          direction={"vertical"}
          defaultEffect={"cube"}
          currentPage={verticalIndex}
          dragEnabled={false}
          backgroundColor="transparent"
          height={"100vh"}
          width={pageWidth}
        >
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
            center
          >
            <Controls />
            <CubeWrapper themeStyle={currentStyle}>
              <TerminalIntro />
            </CubeWrapper>
          </Frame>
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
            center
          >
            <Controls />
            <CubeWrapper themeStyle={currentStyle}>
              <AboutMe />
            </CubeWrapper>
          </Frame>
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
            center
          >
            <Controls />
            {/* <FrontEndSlide /> */}
            <CubeWrapper themeStyle={currentStyle}>
              <MyExperience />
            </CubeWrapper>
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          directionLock={true}
          height={"100vh"}
          width={pageWidth}
        >
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
          >
            <Controls />
            <HowsItMade />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          directionLock={true}
          height={"100vh"}
          width={pageWidth}
        >
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          directionLock={true}
          height={"100vh"}
          width={pageWidth}
        >
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
          >
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
      </Page>
    </div>
  );
};

export default FramerCube;
