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

  // 4 sides for horizontal rotation (front, right, back, left)
  const MAX_HORIZONTAL_SIDES = 4;
  // 3 sides for vertical rotation (top, front, bottom)
  const MAX_VERTICAL_SIDES = 3;

  // Show vertical navigation when on the main track (front face)
  const showVerticalNav = currentIndex === 0;
  // Show horizontal navigation when on the front face (middle vertical position)
  const showHorizontalNav = verticalIndex === 1;

  const upFromCurrent = (): void => {
    // Move up from current position (1 -> 0 for top)
    if (verticalIndex > 0) {
      setVerticalIndex(verticalIndex - 1);
    }
  };

  const downFromCurrent = (): void => {
    // Move down from current position (1 -> 2 for bottom)
    if (verticalIndex < MAX_VERTICAL_SIDES - 1) {
      setVerticalIndex(verticalIndex + 1);
    }
  };

  const rightFromCurrent = (): void => {
    // Rotate cube right (0 -> 1 -> 2 -> 3)
    setCurrentIndex((currentIndex + 1) % MAX_HORIZONTAL_SIDES);
  };

  const leftFromCurrent = (): void => {
    // Rotate cube left (3 -> 2 -> 1 -> 0)
    setCurrentIndex(
      (currentIndex - 1 + MAX_HORIZONTAL_SIDES) % MAX_HORIZONTAL_SIDES,
    );
  };

  return (
    <div className={controlsContainerStyle(shouldBlend)}>
      {/* Up arrow - visible when on front face and not at top */}
      {showVerticalNav && verticalIndex > 0 && (
        <div className={upButtonStyle} onClick={upFromCurrent}>
          <ChevronUp size="36" />
        </div>
      )}
      {/* Down arrow - visible when on front face and not at bottom */}
      {showVerticalNav && verticalIndex < MAX_VERTICAL_SIDES - 1 && (
        <div className={downButtonStyle} onClick={downFromCurrent}>
          <ChevronDown size="36" />
        </div>
      )}
      {/* Left/Right arrows - visible when on front face */}
      {showHorizontalNav && (
        <>
          <div className={leftButtonStyle} onClick={leftFromCurrent}>
            <ChevronLeft size="36" />
          </div>
          <div className={rightButtonStyle} onClick={rightFromCurrent}>
            <ChevronRight size="36" />
          </div>
        </>
      )}
    </div>
  );
};
