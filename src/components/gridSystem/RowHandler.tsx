import React, { useState, useContext } from 'react';
import { ChevronLeft, ChevronRight } from '@styled-icons/boxicons-solid';
import styled from 'styled-components'; 
import AnimationContext from '../../context/AnimationContext';

interface IRowHandler {
  slides: Array<JSX.Element>
}

const RowContainer = styled.div`
  height: 100%;
  width: 100%;
`

const PrevButton = styled(ChevronLeft)`
  position: absolute;
  left: 5px;
  top: 50%;
  z-index: 10;
  cursor: pointer;
`

const NextButton = styled(ChevronRight)`
  position: absolute;
  right: 5px;
  top: 50%;
  z-index: 10;
  cursor: pointer;
`

export const RowHandler = (props: IRowHandler) => {
  const {
    slides
  } = props
  const [slideIndex, setSlideIndex] = useState(0);
  const {
    transitioning,
    startTransition,
    endTransition,
    enteringIndex,
    exitingIndex,
    left,
    right,
    up,
    down
  } = useContext(AnimationContext)

  const nextRow = () => {
    let transitionCount = 0;
    const transitionInterval = setInterval(() => {


      if (transitionCount === 89) {
        clearInterval(transitionInterval);
      }
      transitionCount++;
    }, 1000/90)
    if (slideIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1);
    }
  }

  const lastRow = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  }

  return (
    <RowContainer>
      {slideIndex > 0 && <PrevButton size='36' onClick={() => lastRow()} />}
      {slides[slideIndex]}
      {slideIndex < slides.length - 1 && <NextButton size='36' onClick={() => nextRow()} />}
    </RowContainer>
  )
}