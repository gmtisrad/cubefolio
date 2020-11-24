import React, { useContext, useState, useEffect, useRef } from "react";
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

export const ManipulatableCube = () => {
  const { light, dark, neon } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [throttleEvent, setThrottleEvent] = useState(false);

  // Cube Animation State
  const cubeRotateX = useRef(0);
  const cubeRotateY = useRef(0);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  useEffect(() => {
    const handleDrag = (event: MouseEvent) => {
      const getRotateX = () => {
        let newRotateX = cubeRotateX.current - event.movementY * 0.15;
        newRotateX = newRotateX < -90 ? -90 : newRotateX;
        newRotateX = newRotateX > 90 ? 90 : newRotateX;
        return newRotateX;
      };
      if (mouseDown && !throttleEvent) {
        cubeRotateX.current = getRotateX();
        cubeRotateY.current = cubeRotateY.current + event.movementX * 0.075;
        setThrottleEvent(true);
        setTimeout(() => {
          setThrottleEvent(false);
        }, 100);
      }
    };

    const mouseUp = () => {
      setMouseDown(false);
    };

    window.addEventListener("mousemove", handleDrag);

    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [mouseDown]);

  const rotateToOne = () => {
    // cubeRotateX.current = 0;
    // cubeRotateY.current = 0;
    const deltaX = 0 - cubeRotateX.current;
    const deltaY = 0 - cubeRotateY.current;

    setInterval(() => {
      cubeRotateX.current = cubeRotateX.current + deltaX / (1000 / 40);
      cubeRotateY.current = cubeRotateY.current + deltaY / (1000 / 40);
    }, 1000 / 40);
  };

  const rotateToTwo = () => {
    cubeRotateX.current = 0;
    cubeRotateY.current = -90;
  };

  const centerButtonStyle = css`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 10;
  `;

  return (
    <div className="wrapper">
      <div className={cx(cubeViewport, "manipulatable-cube-viewport")}>
        <div
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
              onClick={() => rotateToOne()}
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
            <MiniIntroSlide
              heading="Hi, my name is Gabe!"
              message="I am a web developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManipulatableCube;
