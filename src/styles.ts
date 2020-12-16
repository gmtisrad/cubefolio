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
