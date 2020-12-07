import React, { useContext } from "react";
import Wrapper from "./components/Wrapper";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FramerCube from "./components/framerCube/FramerCube";
import StarField from "./components/StarField";
import ManipulatableCube from "./components/manipulatableCube/ManipulatableCube";
import ThemeContext from "./context/ThemeContext";
import ViewSwitcher from "./components/VeiwSwitcher";
import { Page, Frame } from "framer";

const App: React.FC = () => {
  const { standardView } = useContext(ThemeContext);

  const shrinkEffect = () => ({
    height: "50vh",
    width: "50vw",
  });

  const growEffect = () => ({
    height: "100vh",
    width: "100vw",
  });

  return (
    <>
      <ThemeSwitcher />
      <ViewSwitcher />
      <StarField />
      <Page
        height={"100vh"}
        width={"100vw"}
        alignment="center"
        dragEnabled={false}
        draggable={false}
        currentPage={standardView ? 0 : 1}
        effect={standardView ? shrinkEffect : growEffect}
      >
        <Frame background="transparent" height="100vh" width="100vw" center="y">
          <FramerCube />
        </Frame>
        <Frame background="transparent" height="100vh" center>
          <ManipulatableCube />
        </Frame>
      </Page>
    </>
  );
};

export default App;
