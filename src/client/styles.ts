import { css } from "@emotion/css";
import {
  LIGHT_BACKGROUND,
  LIGHT_TEXT,
  DARK_BACKGROUND,
  NEON_BACKGROUND,
  NEON_TEXT,
  DARK_TEXT,
} from "./constants/ColorConstants";

/* Wrapper Styles */
export const baseWrapperStyle = css`
  @media (orientation: landscape) {
    height: 100vh;
    width: 100vh;
  }

  @media (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
  margin: 0 auto;
`;

export const lightWrapperStyle = css`
  color: ${LIGHT_TEXT};
  background-color: ${LIGHT_BACKGROUND};
`;

export const darkWrapperStyle = css`
  color: ${DARK_TEXT};
  background-color: ${DARK_BACKGROUND};
`;

export const neonWrapperStyle = css`
  color: ${NEON_TEXT};
  background-color: ${NEON_BACKGROUND};
`;

export const standardViewWrapperStyle = css`
  width: 100%;
  height: 100%;
`;

export const columnContainerStyles = (textColor: string): string => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor};

  @media (orientation: landscape) {
    height: 100vh;
    width: 100vh;
  }

  @media (orientation: portrait) {
    height: 100vh;
    width: 100vw;
  }
`;

export const controlsContainerStyle = (shouldBlend: boolean): string => css`
  position: fixed;
  height: 100px;
  width: 100px;
  right: 40px;
  bottom: 40px;
  z-index: 2000;
  ${shouldBlend ? "mix-blend-mode: difference;" : ""}
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const upButtonStyle = css`
  position: absolute;
  top: 0;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2001;
  cursor: pointer;
  mix-blend-mode: difference;
  color: white;
`;

export const downButtonStyle = css`
  position: absolute;
  bottom: 0;
  width: 36px;
  height: 36px;
  z-index: 2001;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  mix-blend-mode: difference;
  color: white;
`;

export const leftButtonStyle = css`
  position: absolute;
  left: 0;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001;
  cursor: pointer;
  mix-blend-mode: difference;
  color: white;
`;

export const rightButtonStyle = css`
  position: absolute;
  right: 0;
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2001;
  cursor: pointer;
  mix-blend-mode: difference;
  color: white;
`;

export const projectImageStyle = css`
  height: 100%;
  width: auto;
`;

export const projectContentStyle = (
  textColor: string,
  backgroundColor: string
): string => css`
  position: absolute;
  left: 12.5%;
  width: 75%;
  border-radius: 5px;
  background-color: ${textColor};
  color: ${backgroundColor};
  padding: 10px 15px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  box-shadow: 20px 20px 0 ${backgroundColor};
`;

export const projectBackdropStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
`;

export const projectContainerStyle = css`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const projectWrapperStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const menuTriggerStyle = (
  textColor: string,
  backgroundColor: string
): string => css`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  color: ${textColor};
  background-color: ${backgroundColor};
  border: 1px solid ${textColor};
  position: absolute;
  top: 50px;
  left: 20px;
  z-index: 1;
  cursor: pointer;
`;

export const cubeFaceStyle = (backgroundColor: string): string => css`
  height: 100%;
  width: 100%;
  background-color: ${backgroundColor};
  overflow-y: auto;
  img {
    pointer-event: none;
  }
`;

export const avatarWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  transform: rotate(45deg);
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 10px 0 white;
  margin: 0;
  img {
    transform: rotate(-45deg);
    margin: 0 -30px -30px 0;
  }
`;

export const themeSwitcherButtonStyle = (
  backgroundColor: string,
  textColor: string
): string => css`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${textColor};
  color: ${backgroundColor};
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  z-index: 99;
`;

export const viewSwitcherButtonStyle = (
  backgroundColor: string,
  textColor: string
): string => css`
  position: absolute;
  top: 70px;
  left: 10px;
  background-color: ${textColor};
  color: ${backgroundColor};
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  z-index: 99;
`;

export const manipulatableCubeWrapperStyle = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const manipulatableCubeFaceStyle = css`
  height: 100vh;
  width: 100vh;
  transform: scale(0.5) translate(-50%, -50%);
`;

export const aboutMeWrapperStyle = css`
  text-align: left;
  padding: 30px;
  font-size: 16px;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    .avatar-wrapper {
      margin: 60px;
    }
    padding-top: 60px;
  }
`;

export const infoContainerStyle = css`
  @media (min-width: 768px) {
    width: 50%;
  }
  .skills-info {
    margin: 0 20px 0 0;
  }
  ul {
    columns: 2;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    max-width: 568px;
    ul {
      max-width: 324px;
      margin: 0 auto;
    }
  }
`;

export const avatarContainer = css`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const contactMeStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const contactMeFormStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  input {
    padding: 10px 2px;
    margin: 0 0 10px;
  }
  button {
    margin-top: 10px;
  }
  @media (min-width: 769px) {
    width: 640px;
  }
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const contactFormRow = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 769px) {
    justify-content: space-between;
    input {
      width: 49%;
    }
    #subject-input {
      width: 100%;
    }
    #message-input {
      width: 100%;
      height: 100px;
    }
  }
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`;

export const formTitleStyle = (
  textColor: string,
  backgroundColor: string
): string => css`
  font-size: 24px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: ${backgroundColor};
  background-color: ${textColor};
  margin-bottom: 10px;
`;

export const formButtonStyle = (isFormValid: boolean): string => css`
  opacity: ${isFormValid ? 1 : 0.5};
  cursor: ${isFormValid ? "pointer" : "cursor"};
`;

export const contactMeIntro = css`
  width: 100%;
  text-align: center;
`;

export const isValid = (valid: boolean): string =>
  css`
    ${valid === false ? "border: 1px solid red" : ""}
  `;

export const skillsWrapperStyles = css`
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;
`;

export const headerStyle = (textColor: string): string => css`
  text-shadow: none;
  border-bottom: 1px solid ${textColor};
`;

export const skillsStyles = (color: string): string => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0 0 15px;
    // text-shadow: 0 0 5px ${color};
  }
`;

export const nikeTabStyle = css`
  overflow-x: hidden;
  margin-top: 40px;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const nikeTabTopNavStyle = css`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const nikeTabNavInfo = css`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: visible;
  white-space: nowrap;
`;

export const nikeTabTickerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #f7f7f7;
  color: black;
`;

export const nikeTabBody = css`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media (min-width: 1921px) {
    max-width: 1440px;
  }
  @media (max-width: 1920px) {
    max-width: 1024px;
  }
`;

export const nikeTabBodyRowLeft = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0;
    img {
      margin-bottom: 20px;
    }
  }
`;
export const nbyLogo = css`
  display: flex;
  align-items: center;
  width: 300px;
  img {
    height: 300px;
    width: 300px;
  }
`;

export const nbyInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  p {
    margin-top: 0;
  }
  @media (min-width: 568px) {
    padding-left: 20px;
  }
`;

export const nikeTabFooterStyle = css`
  background-color: #111;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    li {
      width: 45%;
      margin: 10px 0;
    }
  }
  @media (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 586px) {
    ul {
      padding: 20px;
      li {
        width: 100%;
      }
    }
  }
`;
