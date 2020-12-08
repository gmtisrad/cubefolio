import React, { useContext } from "react";
import Wrapper from "./components/Wrapper";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FramerCube from "./components/framerCube/FramerCube";
import StarField from "./components/StarField";
import ManipulatableCube from "./components/manipulatableCube/ManipulatableCube";
import ThemeContext from "./context/ThemeContext";
import ViewSwitcher from "./components/VeiwSwitcher";
import { Page, Frame, AnimatePresence, motion } from "framer";

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
      <AnimatePresence>
        {standardView && (
          <Wrapper>
            <motion.div
              key="standard"
              initial={{ scale: 0.5 }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.5,
              }}
            >
              <FramerCube />
            </motion.div>
          </Wrapper>
        )}
        {!standardView && (
          <Wrapper>
            <motion.div
              key="cube"
              initial={{ scale: 2 }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 2,
              }}
            >
              <ManipulatableCube />
            </motion.div>
          </Wrapper>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
