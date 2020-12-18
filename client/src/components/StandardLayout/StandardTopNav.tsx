import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import { getBackgroundColor } from "../../utils/styleUtils";
import { standardTopNavStyles } from "./standardStyles";
import { cx } from "@emotion/css";
import GabeLogo from "../../assets/GabeLogo.png";

export const StandardTopNav: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);

  const [accentBackground, setAccentBackground] = useState("");

  useEffect(() => {
    setAccentBackground(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  return (
    <div className={cx("top-nav", standardTopNavStyles(accentBackground))}>
      <img src={GabeLogo} />
    </div>
  );
};

export default StandardTopNav;
