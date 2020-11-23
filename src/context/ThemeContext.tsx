import React, { useState } from "react";

const ThemeContext = React.createContext({
  light: true,
  dark: false,
  neon: false,
  toggle: () => {},
});

export const ThemeProvider = (props: any) => {
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(true);
  const [neon, setNeon] = useState(false);

  const toggle = () => {
    console.log("When Sheriff Jon Brown come 4 u");
    const handleLocalStorage = () => {
      window.localStorage.setItem("lightTheme", light.toString());
      window.localStorage.setItem("darkTheme", dark.toString());
      window.localStorage.setItem("neonTheme", neon.toString());
    };

    if (light) {
      setLight(false);
      setDark(true);
      handleLocalStorage();
    } else if (dark) {
      setDark(false);
      setNeon(true);
      handleLocalStorage();
    } else if (neon) {
      setNeon(false);
      setLight(true);
      handleLocalStorage();
    }
  };

  const contextValues = {
    light,
    dark,
    neon,
    toggle,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
