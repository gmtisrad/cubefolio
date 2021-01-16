import React from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "@styled-icons/boxicons-solid";
import {
  downButtonStyle,
  leftButtonStyle,
  rightButtonStyle,
  upButtonStyle,
  controlsContainerStyle,
} from "../styles";

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
    setVerticalIndex(verticalIndex - 1);
  };

  const downFromCurrent = (): void => {
    setVerticalIndex(verticalIndex + 1);
  };

  const rightFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const leftFromCurrent = (): void => {
    if (verticalIndex === 1) {
      setCurrentIndex(currentIndex - 1);
    } else if (verticalIndex === 0 || verticalIndex === 2) {
      setVerticalIndex(1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const UpButton: React.FC = () => {
    return (
      <div className={upButtonStyle} onClick={upFromCurrent}>
        <ChevronUp size="36" />
      </div>
    );
  };

  const DownButton: React.FC = () => {
    return (
      <div className={downButtonStyle} onClick={downFromCurrent}>
        <ChevronDown size="36" />
      </div>
    );
  };

  const LeftButton: React.FC = () => {
    return (
      <div className={leftButtonStyle} onClick={leftFromCurrent}>
        <ChevronLeft size="36" />
      </div>
    );
  };

  const RightButton: React.FC = () => {
    return (
      <div className={rightButtonStyle} onClick={rightFromCurrent}>
        <ChevronRight size="36" />
      </div>
    );
  };

  return (
    <div className={controlsContainerStyle(shouldBlend)}>
      {verticalIndex !== 0 && currentIndex === 0 && <UpButton />}
      {verticalIndex < MAX_VERTICAL_SIDES - 1 && currentIndex === 0 && (
        <DownButton />
      )}
      {currentIndex !== 0 && verticalIndex === 1 && <LeftButton />}
      {currentIndex < MAX_HORIZONTAL_SIDES - 1 && verticalIndex === 1 && (
        <RightButton />
      )}
    </div>
  );
};
