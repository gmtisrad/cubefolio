import React from "react";
import Wrapper from "./components/Wrapper";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FramerCube from "./components/FramerCube";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <Wrapper>
        <ThemeSwitcher />
        <FramerCube />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
