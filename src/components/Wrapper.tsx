import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';
import { DARK_BACKGROUND, NEON_BACKGROUND, LIGHT_BACKGROUND, LIGHT_TEXT, DARK_TEXT, NEON_TEXT } from '../constants/ColorConstants';

const LightWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${LIGHT_BACKGROUND};
  color: ${LIGHT_TEXT}
`

const DarkWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${DARK_BACKGROUND};
  color: ${DARK_TEXT}
`

const NeonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${NEON_BACKGROUND};
  color: ${NEON_TEXT}
`

export const Wrapper = (props: any) => {
  const { light, dark, neon, toggle } = useContext(ThemeContext);

  const ctxProps = { light, dark, neon, toggle };
  const allProps = { ...props, ...ctxProps };

  if (neon) {
    return (
      <NeonWrapper { ...allProps } >
        { allProps.children}
      </NeonWrapper>
    );
  } else if (dark) {
    return (
      <DarkWrapper { ...allProps }>
        { allProps.children }
      </DarkWrapper>
    );
  } else if (light) {
    return (
      <LightWrapper { ...allProps }>
        { allProps.children }
      </LightWrapper>
    );
  } else {
    return (
      <LightWrapper { ...allProps }>
        { allProps.children }
      </LightWrapper>
    );
  }
}

export default Wrapper;