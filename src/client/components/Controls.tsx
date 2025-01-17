import React from 'react';
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from '@styled-icons/boxicons-solid';
import {
  downButtonStyle,
  leftButtonStyle,
  rightButtonStyle,
  upButtonStyle,
  controlsContainerStyle,
} from '../styles';

type Props = {
  shouldBlend: boolean;
  setCurrentIndex: (idx: number) => void;
  setVerticalIndex: (idx: number) => void;
  verticalIndex: number;
  currentIndex: number;
};

export const Controls: React.FC<Props> = (props: Props) => {
  const {
    shouldBlend,
    setCurrentIndex,
    setVerticalIndex,
    verticalIndex,
    currentIndex,
  } = props;

  const MAX_HORIZONTAL_SIDES = 4;
  const MAX_VERTICAL_SIDES = 3;

  const upFromCurrent = (): void => {
    if (verticalIndex > 0) {
      setVerticalIndex(verticalIndex - 1);
    }
  };

  const downFromCurrent = (): void => {
    if (verticalIndex < MAX_VERTICAL_SIDES - 1) {
      setVerticalIndex(verticalIndex + 1);
    }
  };

  const rightFromCurrent = (): void => {
    if (currentIndex < MAX_HORIZONTAL_SIDES - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const leftFromCurrent = (): void => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={controlsContainerStyle(shouldBlend)}>
      <div className={upButtonStyle} onClick={upFromCurrent}>
        <ChevronUp size="36" />
      </div>
      <div className={downButtonStyle} onClick={downFromCurrent}>
        <ChevronDown size="36" />
      </div>
      <div className={leftButtonStyle} onClick={leftFromCurrent}>
        <ChevronLeft size="36" />
      </div>
      <div className={rightButtonStyle} onClick={rightFromCurrent}>
        <ChevronRight size="36" />
      </div>
    </div>
  );
};
