import React, { useContext, useState, useEffect, useCallback } from "react";
import { MiniIntroSlide } from "../slides/MiniIntroSlide";
import ThemeContext from "../../context/ThemeContext";
import { getBackgroundColor, getTextColor } from "../../utils/styleUtils";
import { cx, css } from "@emotion/css";
import {
  cubeWrapper,
  cubeViewport,
  cubeSideStyle,
  sideOne,
  sideTwo,
  sideThree,
  sideFour,
  sideFive,
  sideSix,
} from "./manipulatableCubeStyles";
import { motion, useMotionValue } from "framer";

export const ManipulatableCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [throttleEvent, setThrottleEvent] = useState(false);

  // Cube Animation State
  const cubeRotateX = useMotionValue(0);
  const cubeRotateY = useMotionValue(0);
  const [mouseDown, setMouseDown] = useState(false);

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      let throttleTimeout;
      const getRotateX = () => {
        let newRotateX = cubeRotateX.get() - event.movementY * 0.3;
        newRotateX = newRotateX < -91 ? -90 : newRotateX;
        newRotateX = newRotateX > 91 ? 90 : newRotateX;
        return newRotateX;
      };
      if (mouseDown && !throttleEvent) {
        cubeRotateX.set(getRotateX());
        cubeRotateY.set(cubeRotateY.get() + event.movementX * 0.15);
        setThrottleEvent(true);
        throttleTimeout = setTimeout(() => {
          setThrottleEvent(false);
        }, 1000 / 90);
      } else if (!mouseDown) {
        clearTimeout(throttleTimeout);
      }
    },
    [cubeRotateX, cubeRotateY, mouseDown, throttleEvent]
  );

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  useEffect(() => {
    window.onmousemove = handleDrag;
    window.onmousedown = () => setMouseDown(true);
    window.onmouseup = () => setMouseDown(false);
  }, [handleDrag]);

  return (
    <div
      className={cx(
        "wrapper",
        css`
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        `
      )}
    >
      <motion.div className={cubeViewport} animate="end">
        <motion.div
          style={{
            rotateX: `${cubeRotateX.get()}deg`,
            rotateY: `${cubeRotateY.get()}deg`,
          }}
          className={cx(
            cubeWrapper(light, cubeRotateX, cubeRotateY, textColor),
            "cube"
          )}
        >
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideOne,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideTwo,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideThree,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFour,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFive,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideSix,
              "side"
            )}
          >
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ManipulatableCube;
