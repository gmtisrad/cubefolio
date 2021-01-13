import { cx } from "@emotion/css";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { cubeFaceStyle } from "../styles";
import { getBackgroundColor } from "../utils/styleUtils";

type Props = {
  themeStyle: string;
  children: React.ReactNode | React.ReactNode[];
};

export const CubeWrapper: React.FC<Props> = (props: Props) => {
  const { themeStyle } = props;
  const { light, dark, neon } = useContext(ThemeContext);

  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div
      className={cx(
        "cube-face-wrapper",
        cubeFaceStyle(backgroundColor),
        themeStyle
      )}
    >
      {props.children}
    </div>
  );
};

export default CubeWrapper;
