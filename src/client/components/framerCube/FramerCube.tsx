import React, { useState, useEffect, useContext } from "react";
import { cx } from "@emotion/css";
import { Frame, Page } from "framer";
import { getCurrentStyle, getTextColor } from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";
import TitleSlide from "../slides/TitleSlide";
import AboutMe from "../slides/AboutMe";
import TerminalIntro from "../slides/TerminalIntro";
import MyExperience from "../slides/MyExperience";
import ContactMe from "../slides/ContactMe";
import { MyProjects } from "../slides/MyProjects";
import { columnContainerStyles } from "../../styles";
import { Controls } from "../Controls";
import CubeWrapper from "../CubeWrapper";

export const FramerCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [currentStyle, setCurrentStyle] = useState("");
  const [textColor, setTextColor] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [verticalIndex, setVerticalIndex] = useState(0);

  const pageWidth = ((): string => {
    return window.outerHeight > window.outerWidth ? "100vw" : "100vh";
  })();

  useEffect(() => {
    setCurrentStyle(getCurrentStyle(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={cx(columnContainerStyles(textColor))}>
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
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={true}
            />
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
            <CubeWrapper themeStyle={currentStyle}>
              <AboutMe />
            </CubeWrapper>
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={true}
            />
          </Frame>
          <Frame
            backgroundColor="transparent"
            height={"100vh"}
            width={pageWidth}
            center
          >
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={true}
            />
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
            <CubeWrapper themeStyle={currentStyle}>
              <MyProjects />
            </CubeWrapper>
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={false}
            />
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
            <CubeWrapper themeStyle={currentStyle}>
              <ContactMe />
            </CubeWrapper>
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={true}
            />
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
            <Controls
              currentIndex={currentIndex}
              verticalIndex={verticalIndex}
              setVerticalIndex={(idx: number): void => setVerticalIndex(idx)}
              setCurrentIndex={(idx: number): void => setCurrentIndex(idx)}
              shouldBlend={true}
            />
            <TitleSlide />
          </Frame>
        </Page>
      </Page>
    </div>
  );
};

export default FramerCube;
