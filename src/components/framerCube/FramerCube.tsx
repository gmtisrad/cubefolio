import React, { useState, useEffect, useContext } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "@styled-icons/boxicons-solid";
import { css, cx } from "@emotion/css";
import { IntroSlide } from "../slides/IntroSlide";
import { Frame, Page } from "framer";
import {
  getCurrentStyle,
  getBackgroundColor,
  getTextColor,
} from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";
import TitleSlide from "../slides/TitleSlide";
import FrontEndSlide from "../slides/FrontEndSlide";
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
  height: 100vh;
  width: 100vh;
`;

const upButtonStyle = css`
  position: absolute;
  top: 5px;
  left: 50%;
  z-index: 100;
  cursor: pointer;
`;

const downButtonStyle = css`
  position: absolute;
  bottom: 5px;
  left: 50%;
  z-index: 100;
  cursor: pointer;
`;

const leftButtonStyle = css`
  position: absolute;
  top: 50%;
  left: 5px;
  z-index: 100;
  cursor: pointer;
`;

const rightButtonStyle = css`
  position: absolute;
  top: 50%;
  right: 5px;
  z-index: 100;
  cursor: pointer;
`;

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(0);

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

  const Controls: React.FC = () => (
    <>
      {verticalIndex !== 0 && currentIndex === 0 && <UpButton />}
      {verticalIndex < MAX_VERTICAL_SIDES - 1 && currentIndex === 0 && (
        <DownButton />
      )}
      {currentIndex !== 0 && verticalIndex === 1 && <LeftButton />}
      {currentIndex < MAX_HORIZONTAL_SIDES - 1 && verticalIndex === 1 && (
        <RightButton />
      )}
    </>
  );

  const CubeWrapper = (props: any) => {
    const { themeStyle } = props;
    const cubeFaceStyle = css`
      height: 100%;
      width: 100%;
      border-top: 1px solid ${textColor};
      border-bottom: 1px solid ${textColor};
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
        width={"100vh"}
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
          width={"100vh"}
        >
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={"100vh"}
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
            width={"100vh"}
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
            width={"100vh"}
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
          width={"100vh"}
        >
          <Frame backgroundColor="transparent" height={"100vh"} width={"100vh"}>
            <Controls />
            <FrontEndSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          directionLock={true}
          height={"100vh"}
          width={"100vh"}
        >
          <Frame backgroundColor="transparent" height={"100vh"} width={"100vh"}>
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
        <Page
          dragEnabled={false}
          defaultEffect={"cube"}
          directionLock={true}
          height={"100vh"}
          width={"100vh"}
        >
          <Frame backgroundColor="transparent" height={"100vh"} width={"100vh"}>
            <Controls />
            <TitleSlide />
          </Frame>
        </Page>
      </Page>
    </div>
  );
};

export default FramerCube;
