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
  width: 100vh;
  height: 100vh;
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
