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
import { FilterCenterFocus } from "@styled-icons/material-outlined";
import { motion, useMotionValue } from "framer";

export const ManipulatableCube: React.FC = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [throttleEvent, setThrottleEvent] = useState(false);

  // Cube Animation State
  const cubeRotateX = useMotionValue(0);
  const cubeRotateY = useMotionValue(0);
  const [currentFace, setCurrentFace] = useState("");
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
        }, 100);
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
  });

  const animationEnd = () => {
    switch (currentFace) {
      case "one":
        cubeRotateX.set(0);
        cubeRotateY.set(0);
        break;
      case "two":
        cubeRotateX.set(-90);
        cubeRotateY.set(0);
        break;
      case "three":
        cubeRotateX.set(0);
        cubeRotateY.set(-90);
        break;
      case "four":
        cubeRotateX.set(0);
        cubeRotateY.set(-180);
        break;
      case "five":
        cubeRotateX.set(0);
        cubeRotateY.set(-270);
        break;
      case "six":
        cubeRotateX.set(90);
        cubeRotateY.set(0);
        break;
    }
    setCurrentFace("");
  };

  const variants = {
    one: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "0deg",
      rotateY: "0deg",
    },
    two: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "-90deg",
      rotateY: "0deg",
    },
    three: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "0deg",
      rotateY: "90deg",
    },
    four: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "0deg",
      rotateY: "180deg",
    },
    five: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "0deg",
      rotateY: "270deg",
    },
    six: {
      perspective: "1000px",
      height: "50vh",
      width: "50vh",
      rotateX: "90deg",
      rotateY: "0deg",
    },
  };

  const viewportVariants = {
    initial: {
      height: "100vh",
      width: "100vh",
    },
    end: {
      height: "50vh",
      width: "50vh",
      perspective: "1000px",
      perspectiveOrigin: "50% 200px",
      transform: "scale(0.8, 0.8)",
    },
  };

  const sizeVariant = {
    end: {
      height: "50vh",
      width: "50vh",
    },
  };

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
      <motion.div
        // variants={viewportVariants}
        // initial={{
        //   height: "100vh",
        //   width: "100vh",
        // }}
        className={cubeViewport}
        animate="end"
      >
        <motion.div
          // initial={{
          //   rotateX: 0,
          //   rotateY: 0,
          // }}
          // animate={currentFace}
          // variants={variants}
          // onAnimationComplete={() => animationEnd()}
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
            // initial={{
            //   height: "100vh",
            //   width: "100vh",
            // }}
            // variants={sizeVariant}
            // animate="end"
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
