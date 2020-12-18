import {
  neonWrapperStyle,
  darkWrapperStyle,
  lightWrapperStyle,
} from "../styles";
import {
  NEON_BACKGROUND,
  DARK_BACKGROUND,
  LIGHT_BACKGROUND,
  NEON_TEXT,
  DARK_TEXT,
  LIGHT_TEXT,
  NEON_ACCENT_BACKGROUND,
  DARK_ACCENT_BACKGROUND,
  LIGHT_ACCENT_BACKGROUND,
} from "../constants/ColorConstants";

export const getCurrentStyle = (
  light: boolean,
  neon: boolean,
  dark: boolean
) => {
  if (neon) {
    return neonWrapperStyle;
  } else if (dark) {
    return darkWrapperStyle;
  } else if (light) {
    return lightWrapperStyle;
  } else {
    return lightWrapperStyle;
  }
};

export const getBackgroundColor = (
  light: boolean,
  neon: boolean,
  dark: boolean
) => {
  if (neon) {
    return NEON_BACKGROUND;
  } else if (dark) {
    return DARK_BACKGROUND;
  } else if (light) {
    return LIGHT_BACKGROUND;
  } else {
    return LIGHT_BACKGROUND;
  }
};

export const getTextColor = (light: boolean, neon: boolean, dark: boolean) => {
  if (neon) {
    return NEON_TEXT;
  } else if (dark) {
    return DARK_TEXT;
  } else if (light) {
    return LIGHT_TEXT;
  } else {
    return LIGHT_TEXT;
  }
};

export const getAccentBackgroundColor = (
  light: boolean,
  neon: boolean,
  dark: boolean
) => {
  if (neon) {
    return NEON_ACCENT_BACKGROUND;
  } else if (dark) {
    return DARK_ACCENT_BACKGROUND;
  } else if (light) {
    return LIGHT_ACCENT_BACKGROUND;
  } else {
    return LIGHT_ACCENT_BACKGROUND;
  }
};
