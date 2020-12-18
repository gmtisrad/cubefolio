/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";

const ThemeContext = React.createContext({
  light: true,
  dark: false,
  neon: false,
  standardView: true,
  toggleStyle: () => {},
  toggleView: () => {},
});

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ThemeProvider: React.FC<Props> = (props: Props) => {
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(true);
  const [neon, setNeon] = useState(false);
  const [standardView, setStandardView] = useState(true);

  const toggleView = (): void => {
    setStandardView(!standardView);
  };

  const toggleStyle = (): void => {
    const handleLocalStorage = (currentTheme: string): void => {
      window.localStorage.setItem("portfolioTheme", currentTheme);
    };

    if (light) {
      setLight(false);
      setDark(true);
      handleLocalStorage("dark");
    } else if (dark) {
      setDark(false);
      setNeon(true);
      handleLocalStorage("neon");
    } else if (neon) {
      setNeon(false);
      setLight(true);
      handleLocalStorage("light");
    }
  };

  const contextValues = {
    light,
    dark,
    neon,
    standardView,
    toggleStyle,
    toggleView,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
