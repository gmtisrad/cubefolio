import React, { useState } from 'react';

export const AnimationContext = React.createContext({
  transitioning: false,
  startTransition: (
    entering: number,
    exiting: number,
    direction: string
  ) => { console.log(entering, exiting, direction); },
  endTransition: () => {},
  enteringIndex: 0,
  exitingIndex: 0,
  left: false,
  right: false,
  up: false,
  down: false,
})

export const AnimationProvider = (props: any) => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [enteringIndex, setEnteringIndex] = useState(-1);
  const [exitingIndex, setExitingIndex] = useState(-1);

  const startTransition = (
    entering: number,
    exiting: number,
    direction: string
  ) => {
    setTransitioning(true);
    setEnteringIndex(entering);
    setExitingIndex(exiting);

    switch(direction) {
      case 'up':
        setUp(true);
        break;
      case 'down':
        setDown(true);
        break;
      case 'left':
        setLeft(true);
        break;
      case 'right':
        setRight(true);
        break;
      default:
        console.log('Invalid direction.');
        break;
    }
  }

  const endTransition = () => {
    setTransitioning(false);
    setEnteringIndex(-1);
    setExitingIndex(-1);
    setUp(false);
    setRight(false);
    setDown(false);
    setLeft(false);
  }

  const ctxValues = {
    transitioning,
    startTransition,
    endTransition,
    enteringIndex,
    exitingIndex,
    left,
    right,
    up,
    down
  }

  return (
    <AnimationContext.Provider value={ctxValues}>
      {props.childen}
    </AnimationContext.Provider>
  )
}

export default AnimationContext;