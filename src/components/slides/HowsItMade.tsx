import React, { useEffect, useContext, useState } from "react";
import { css, cx } from "@emotion/css";
import { getBackgroundColor } from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";

export const howsItMadeStyle = (backgroundColor: string) => css`
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const twoColumnList = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const overviewStyle = css``;

export const HowsItMade = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={howsItMadeStyle(backgroundColor)}>
      <h1>How I Made This Site</h1>
      <div className={cx("how-its-made-overview", overviewStyle)}>
        The site was built with React using Typescript, and is hosted using a
        node app on AWS. Animations were made using framer/motion or emotion's
        keyframes functionailty depending on the type of animation.
      </div>
      <div className={cx("how-its-made-list", twoColumnList)}>
        <div
          className={css`
            width: 50%;
          `}
        >
          <h2
            className={css`
              text-align: center;
            `}
          >
            Standard View
          </h2>
          <p>The standard view of this application iv</p>
        </div>
        <div
          className={css`
            width: 50%;
          `}
        >
          <h2
            className={css`
              text-align: center;
            `}
          >
            3D-View
          </h2>
        </div>
      </div>
    </div>
  );
};
