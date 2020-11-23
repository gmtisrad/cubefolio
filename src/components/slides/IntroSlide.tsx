import React, { useContext, useState, useEffect } from "react";
import { css } from "@emotion/css";
import ThemeContext from "../../context/ThemeContext";
import { getTextColor } from "../../utils/styleUtils";

type Props = {
  heading: String;
  message: String;
};

const introWrapperStyle = (borderColor: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid ${borderColor};
`;

export const IntroSlide: React.FC<Props> = (props: Props) => {
  const { heading, message } = props;
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={introWrapperStyle(textColor)}>
      <h1>{heading}</h1>
      <p>{message}</p>
    </div>
  );
};
