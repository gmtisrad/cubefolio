import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
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

export const ManipulatableCube = () => {
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
        let newRotateX = cubeRotateX.get() - event.movementY * 0.15;
        newRotateX = newRotateX < -90 ? -90 : newRotateX;
        newRotateX = newRotateX > 90 ? 90 : newRotateX;
        return newRotateX;
      };
      if (mouseDown && !throttleEvent) {
        cubeRotateX.set(getRotateX());
        cubeRotateY.set(cubeRotateY.get() + event.movementX * 0.075);
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
    const mouseUp = (): void => {
      setMouseDown(false);
    };

    console.log("add listeners");
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", mouseUp);

    return (): void => {
      console.log("remove listeners");
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", mouseUp);
    };
  }, [handleDrag]);

  const rotateTo = (face: string) => {
    setCurrentFace(face);
  };

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
        cubeRotateY.set(90);
        break;
      case "four":
        cubeRotateX.set(0);
        cubeRotateY.set(180);
        break;
      case "five":
        cubeRotateX.set(0);
        cubeRotateY.set(270);
        break;
      case "six":
        cubeRotateX.set(90);
        cubeRotateY.set(0);
        break;
    }
    setCurrentFace("");
  };

  const centerButtonStyle = css`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 10;
  `;

  const variants = {
    one: {
      rotateX: "0deg",
      rotateY: "0deg",
    },
    two: {
      rotateX: "-90deg",
      rotateY: "0deg",
    },
    three: {
      rotateX: "0deg",
      rotateY: "90deg",
    },
    four: {
      rotateX: "0deg",
      rotateY: "180deg",
    },
    five: {
      rotateX: "0deg",
      rotateY: "270deg",
    },
    six: {
      rotateX: "90deg",
      rotateY: "0deg",
    },
  };

  return (
    <div className="wrapper">
      <div className={cx(cubeViewport, "manipulatable-cube-viewport")}>
        <motion.div
          initial={{
            rotateX: 0,
            rotateY: 0,
          }}
          animate={currentFace}
          variants={variants}
          onAnimationComplete={() => animationEnd()}
          style={{
            rotateX: `${cubeRotateX.get()}deg`,
            rotateY: `${cubeRotateY.get()}deg`,
          }}
          className={cx(
            cubeWrapper(light, cubeRotateX, cubeRotateY, textColor),
            "cube"
          )}
        >
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideOne,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("one")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideTwo,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("two")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideThree,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("three")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFour,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("four")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFive,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("five")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
          <div
            onMouseDown={() => setMouseDown(true)}
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideSix,
              "side"
            )}
          >
            <FilterCenterFocus
              onClick={() => rotateTo("six")}
              className={centerButtonStyle}
              size={36}
            />
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManipulatableCube;
