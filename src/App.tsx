import React from "react";
import Wrapper from "./components/Wrapper";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FramerCube from "./components/FramerCube";
import StarField from "./components/StarField";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <StarField />
      <Wrapper>
        <FramerCube />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
