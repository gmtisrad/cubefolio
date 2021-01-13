import { cx, css } from "@emotion/css";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
} from "@styled-icons/boxicons-solid";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { getTextColor } from "../../utils/styleUtils";
import { Project } from "../Project";
import pychatimage from "../../assets/pychat.png";
import webcrawler from "../../assets/webcrawler.png";
import { Frame, Page } from "framer";

export const myProjectsStyle = (textColor: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 2em;
  flex-direction: row;
  svg {
    color: ${textColor};
  }
`;

export const MyProjects: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    <Project
      key="PyChat"
      projectName="PyChat"
      projectDescription="PyChat is a desktop based chat client made using Python and Socket.io. I made PyChat in an effort to learn more about how socket communication works and about building UIs with TKinter."
      projectImage={pychatimage}
      projectLink="https://github.com/gmtisrad/PyChat"
    />,
    <Project
      key="sPYder"
      projectName="sPYder"
      projectDescription="sPYder is an uber fast threaded web crawler that allows you to configure the depth of the crawl and whether or not to download the assets on the page. All of that in under 100 lines of python!"
      projectImage={webcrawler}
      projectLink="https://github.com/gmtisrad/web_crawler"
    />,
  ];

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const PreviousProject: React.FC = () => {
    const handlePreviousClick = (): void => {
      setProjectIndex(projectIndex - 1);
    };

    return (
      <div
        className={css`
          height: 40px;
          width: 40px;
          position: absolute;
          left: 10px;
          top: 50%;
          cursor: pointer;
        `}
        onClick={handlePreviousClick}
      >
        <ChevronLeftCircle />
      </div>
    );
  };

  const NextProject: React.FC = () => {
    const handleNextClick = (): void => {
      setProjectIndex(projectIndex + 1);
    };

    return (
      <div
        className={css`
          height: 40px;
          width: 40px;
          position: absolute;
          right: 10px;
          top: 50%;
          cursor: pointer;
        `}
        onClick={handleNextClick}
      >
        <ChevronRightCircle />
      </div>
    );
  };

  const handlePageChange = (currentPage: number): void => {
    setProjectIndex(currentPage);
  };

  return (
    <div className={cx(myProjectsStyle(textColor), "my-projects-wrapper")}>
      <Page
        currentPage={projectIndex}
        height={"100%"}
        width={"100%"}
        backgroundColor="transparent"
        gap={0}
        onChangePage={handlePageChange}
        defaultEffect={"pile"}
      >
        <Frame backgroundColor="transparent" center>
          {projects[0]}
        </Frame>
        <Frame backgroundColor="transparent" center>
          {projects[1]}
        </Frame>
      </Page>
      {projectIndex > 0 && <PreviousProject />}
      {projectIndex < projects.length - 1 && <NextProject />}
    </div>
  );
};
