import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import ThemeContext from '../../context/ThemeContext';
import { getBackgroundColor, getTextColor } from '../../utils/styleUtils';
import { cx } from '@emotion/css';
import {
  cubeWrapper,
  cubeViewport,
  cubeSideStyle,
  sideOne,
  sideTwo,
  sideThree,
  sideFour,
  sideFive,
  sideSix,
} from './manipulatableCubeStyles';
import { motion, useMotionValue } from 'framer';
import TerminalIntro from '../slides/TerminalIntro';
import AboutMe from '../slides/AboutMe';
import {
  manipulatableCubeFaceStyle,
  manipulatableCubeWrapperStyle,
} from '../../styles';
import CurrentNikeTab from '../slides/CurrentNikeTab';
import NikeTab from '../slides/NikeTab';
import StreamYardTab from '../slides/StreamYardTab';
import ParthenonTab from '../slides/ParthenonTab';
import { Project } from '../Project';
import pychatimage from '../../assets/pychat.png';
import webcrawler from '../../assets/webcrawler.png';

export const ManipulatableCube: React.FC = () => {
  const { standardView: light } = useContext(ThemeContext);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [throttleEvent, setThrottleEvent] = useState(false);
  const previousTouch = useRef((undefined as unknown) as Touch);

  // Cube Animation State
  const cubeRotateX = useMotionValue(0);
  const cubeRotateY = useMotionValue(0);
  const [mouseDown, setMouseDown] = useState(false);

  const getRotateX = useCallback(
    (event: MouseEvent | TouchEvent): number => {
      let newRotateX = cubeRotateX.get() - (event as any).movementY * 0.2;
      newRotateX = Math.max(-90, Math.min(90, newRotateX));
      return newRotateX;
    },
    [cubeRotateX],
  );

  const handleDrag = useCallback(
    (event: MouseEvent) => {
      if (mouseDown && !throttleEvent) {
        cubeRotateX.set(getRotateX(event));
        cubeRotateY.set(cubeRotateY.get() + event.movementX * 0.1);

        setThrottleEvent(true);
        setTimeout(() => {
          setThrottleEvent(false);
        }, 1000 / 60);
      }
    },
    [cubeRotateX, cubeRotateY, mouseDown, throttleEvent, getRotateX],
  );

  const handleMobileDrag = useCallback(
    (event: TouchEvent) => {
      let throttleTimeout: NodeJS.Timeout;

      const handleMovement = (): void => {
        if (mouseDown && !throttleEvent) {
          console.log({ GRX: getRotateX(event) });
          cubeRotateX.set(getRotateX(event));
          cubeRotateY.set(cubeRotateY.get() + (event as any).movementX * 0.15);
          console.log({
            GRY: cubeRotateY.get() + (event as any).movementX * 0.15,
          });
          setThrottleEvent(true);
          throttleTimeout = setTimeout(() => {
            setThrottleEvent(false);
          }, 1000 / 90);
        } else if (!mouseDown) {
          clearTimeout(throttleTimeout);
        }
      };

      ((): void => {
        const touch = event.touches[0];

        if (previousTouch.current) {
          (event as any).movementX = touch.pageX - previousTouch.current.pageX;
          (event as any).movementY = touch.pageY - previousTouch.current.pageY;

          handleMovement();
        }

        previousTouch.current = touch;
      })();
    },
    [cubeRotateX, cubeRotateY, getRotateX, mouseDown, throttleEvent],
  );

  useEffect(() => {
    setBackgroundColor(getBackgroundColor());
    setTextColor(getTextColor());
  }, [light]);

  useEffect(() => {
    window.onmousemove = handleDrag;
    window.ontouchmove = handleMobileDrag;

    window.ontouchstart = (): void => setMouseDown(true);
    window.onmousedown = (): void => setMouseDown(true);

    window.ontouchend = (): void => {
      setMouseDown(false);
      previousTouch.current = (undefined as any) as Touch;
    };
    window.onmouseup = (): void => setMouseDown(false);
  }, [handleDrag, handleMobileDrag]);

  return (
    <div className={cx('wrapper', manipulatableCubeWrapperStyle)}>
      <motion.div className={cubeViewport} animate="end">
        <motion.div
          style={{
            rotateX: `${cubeRotateX.get()}deg`,
            rotateY: `${cubeRotateY.get()}deg`,
          }}
          className={cx(cubeWrapper(cubeRotateX, cubeRotateY), 'cube')}
        >
          {/* Front - Terminal */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideOne,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <TerminalIntro />
            </div>
          </motion.div>
          {/* Top - About Me */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideTwo,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <AboutMe />
            </div>
          </motion.div>
          {/* Right - Current Nike */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideThree,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <CurrentNikeTab />
            </div>
          </motion.div>
          {/* Back - Previous Nike */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFour,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <NikeTab />
            </div>
          </motion.div>
          {/* Left - StreamYard */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideFive,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <StreamYardTab />
            </div>
          </motion.div>
          {/* Bottom - Parthenon */}
          <motion.div
            className={cx(
              cubeSideStyle(backgroundColor, textColor),
              sideSix,
              'side',
            )}
          >
            <div className={manipulatableCubeFaceStyle}>
              <ParthenonTab />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ManipulatableCube;
