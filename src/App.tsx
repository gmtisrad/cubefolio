import React from "react";
import Wrapper from "./components/Wrapper";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FramerCube from "./components/framerCube/FramerCube";
import StarField from "./components/StarField";
import ManipulatableCube from "./components/manipulatableCube/ManipulatableCube";

const App = (props: any) => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <StarField />
      <Wrapper>
        <ManipulatableCube />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
