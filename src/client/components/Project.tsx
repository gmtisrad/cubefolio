import { cx } from "@emotion/css";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";
import {
  projectContentStyle,
  projectImageStyle,
  projectBackdropStyle,
  projectContainerStyle,
  projectWrapperStyle,
} from "../styles";

type Props = {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
};

export const Project: React.FC<Props> = (props: Props) => {
  const { projectName, projectDescription, projectImage, projectLink } = props;
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
    setBackgroundColor(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={cx(projectWrapperStyle, "project-wrapper")}>
      <div className={projectContainerStyle}>
        <div className={projectBackdropStyle} />
        <img
          className={projectImageStyle}
          src={projectImage}
          alt={projectName}
        />
        <div className={projectContentStyle(textColor, backgroundColor)}>
          {projectDescription}
          <br />
          <a href={projectLink}>Take a look!</a>
        </div>
      </div>
    </div>
  );
};
