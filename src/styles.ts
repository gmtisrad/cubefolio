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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const lightWrapperStyle = css`
  color: ${LIGHT_TEXT};
`;

export const darkWrapperStyle = css`
  color: ${DARK_TEXT};
`;

export const neonWrapperStyle = css`
  color: ${NEON_TEXT};
`;
