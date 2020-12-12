import { css } from "@emotion/css";

export const standardBodyStyle = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin-top: 60px;
  overflow-y: auto;
`;

export const standardLayoutStyles = css`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const standardTopNavStyles = (accentBG: string): string => css`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0 0 10px;
  height: 60px;
  background-color: ${accentBG};
  z-index: 10;
  img {
    height: 50px;
    width: auto;
  }
`;

export const landingPageStyles = css`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
