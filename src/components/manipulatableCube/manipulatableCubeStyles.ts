import { css } from "@emotion/css";

export const cubeSideStyle = (
  backgroundColor: string,
  textColor: string
) => css`
  background-color: ${backgroundColor};
  color: ${textColor};
  overflow: hidden;
  position: absolute;
  height: 50vh;
  width: 50vh;
  user-select: none;
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
  light: boolean,
  cubeRotateX: any,
  cubeRotateY: any,
  textColor: string
): string => css`
  position: relative;
  margin: 0 auto;
  height: 50vh;
  width: 50vh;
  transform-style: preserve-3d;
  transform: rotateX(${cubeRotateX.current || 0}deg)
    rotateY(${cubeRotateY.current || 0}deg);
`;

export const cubeViewport = css`
  perspective: 1000px;
  perspective-origin: 50% 200px;
  transform: scale(0.8, 0.8);
  @media (max-width: 640px) {
    transform: scale(0.6, 0.6);
  }
`;
