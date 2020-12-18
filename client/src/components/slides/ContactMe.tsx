import React, { useEffect, useContext, useState } from "react";
import { css, cx } from "@emotion/css";
import { getBackgroundColor } from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";

export const contactMeStyle = (backgroundColor: string) => css`
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;


export const overviewStyle = css``;

export const ContactMe = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
  );
};

export default ContactMe
