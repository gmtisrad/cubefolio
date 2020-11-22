import React from 'react';
import styled from 'styled-components'

interface IIntroSlide {
  heading: String;
  message: String;
}

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const IntroSlide = (props: IIntroSlide) => {
  const {
    heading,
    message
  } = props;

  return (
    <IntroWrapper>
      <h1>{heading}</h1>
      <p>{message}</p>
    </IntroWrapper>
  )
}