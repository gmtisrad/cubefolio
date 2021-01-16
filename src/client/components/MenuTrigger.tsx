import { Menu } from "@styled-icons/boxicons-regular";
import { motion } from "framer";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { getBackgroundColor, getTextColor } from "../utils/styleUtils";
import ThemeSwitcher from "./ThemeSwitcher";
import ViewSwitcher from "./VeiwSwitcher";
import { menuTriggerStyle } from "../styles";

export const MenuTrigger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [collapseMenu, setCollapseMenu] = useState(window.innerHeight < 1024);

  useEffect(() => {
    setCollapseMenu(window.innerHeight < 1024);
  }, []);

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
    setBackgroundColor(getBackgroundColor(light, neon, dark));
  }, [light, dark, neon]);

  const openStyle = {
    width: "145px",
    height: "115px",
    borderRadius: "15px",
  };

  const closedStyle = {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
  };

  const variants = {
    open: openStyle,
    closed: closedStyle,
  };

  return (
    <motion.div
      animate={isOpen || !collapseMenu ? "open" : "closed"}
      variants={variants}
      onClick={(): void => setIsOpen(!isOpen)}
      className={menuTriggerStyle(textColor, backgroundColor)}
    >
      {isOpen && <ViewSwitcher />}
      {isOpen && <ThemeSwitcher />}
      {!isOpen && <Menu />}
    </motion.div>
  );
};
