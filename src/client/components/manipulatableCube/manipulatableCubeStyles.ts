import { css } from "@emotion/css";

export const cubeSideStyle = (
  backgroundColor: string,
  textColor: string
): string => css`
  background-color: ${backgroundColor};
  color: ${textColor};
  overflow: hidden;
  position: absolute;
  height: 50vh;
  width: 50vh;
  user-select: none;
  backface-visibility: hidden;
  transform-origin: center center;
  transition: transform 0.3s ease-out;
  will-change: transform;
`;

export const sideOne = css`
  transform: translateZ(25vh);
`;

export const sideTwo = css`
  transform: rotateX(90deg) translateZ(25vh);
`;

export const sideThree = css`
  transform: rotateY(90deg) translateZ(25vh);
`;

export const sideFour = css`
  transform: rotateY(180deg) translateZ(25vh);
`;

export const sideFive = css`
  transform: rotateY(-90deg) translateZ(25vh);
`;

export const sideSix = css`
  transform: rotateX(-90deg) rotate(0deg) translateZ(25vh);
`;

export const cubeWrapper = (
  cubeRotateX: { current: number },
  cubeRotateY: { current: number },
): string => css`
  position: relative;
  margin: 0 auto;
  height: 50vh;
  width: 50vh;
  transform-style: preserve-3d;
  transform: rotateX(${cubeRotateX.current || 0}deg)
    rotateY(${cubeRotateY.current || 0}deg);
  transition: transform 0.3s ease-out;
`;

export const cubeViewport = css`
  perspective: 2000px;
  perspective-origin: 50% 50%;
  transform: scale(0.8, 0.8);
  transform-style: preserve-3d;
  @media (max-width: 640px) {
    transform: scale(0.6, 0.6);
  }
`;
