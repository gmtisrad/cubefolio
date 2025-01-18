import { css } from '@emotion/css';

export const standardBodyStyle = css`
  height: 100vh;
  width: 100vw;
  // margin-top: 60px;
  overflow-y: auto;
`;

export const standardLayoutStyles = css`
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
  // z-index: 10;
  img {
    height: 50px;
    width: auto;
  }
`;

export const landingPageStyles = css`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const myExperiencePageStyle = css`
  width: 100%;
  height: 100%;
`;

export const aboutMePageStyles = css`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
`;
