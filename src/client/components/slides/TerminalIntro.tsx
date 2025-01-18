import React, { useState, useEffect, useContext, useRef } from 'react';
import { cx, css } from '@emotion/css';
import { getTextColor } from '../../utils/styleUtils';
import ThemeContext from '../../context/ThemeContext';
import { asciiIntro3 } from '../../assets/asciiIntros';
import {
  scrollingAnimation,
  animateCursor,
  commandWrapperStyle,
  commandStyle,
  terminalWrapperStyle,
  terminalStyle,
  animateText,
  terminalContainerStyle,
  scrollingAnimationMobile,
} from './slidesStyles';

type Props = {
  commandsIndex: React.RefObject<number>;
  update: () => void;
};

const IntroScroll: React.FC<Props> = (props: Props) => {
  const { commandsIndex, update } = props;

  const asciiHtml = `<pre><code>${
    asciiIntro3 // window.innerWidth > 568 ? asciiIntro2 : asciiIntro
  }</code></pre>`;
  const dangerHTML = { __html: asciiHtml };

  const asciiIntroStyle = css`
    @media (min-width: 769px) {
      animation: ${scrollingAnimation} 4s steps(25, end);
      transform: rotate(63deg);
    }
    @media (max-width: 768px) {
      animation: ${scrollingAnimationMobile} 4s steps(30, end);
      transform: rotate(63deg);
    }
    animation-iteration-count: 1;
    animation-delay: 0;
    width: 100%;
    top: 0;
    margin: -60px auto 0;
    background-color: transparent;
    margin: 0 auto;
  `;

  useEffect(() => {
    if (commandsIndex && commandsIndex.current === -1) {
      const animationTimeout = setTimeout(() => {
        update();
      }, 2000);

      return (): void => {
        clearTimeout(animationTimeout);
      };
    }
  }, [commandsIndex, update]);

  return (
    <div className={asciiIntroStyle} dangerouslySetInnerHTML={dangerHTML} />
  );
};

const Cursor: React.FC = () => {
  return <div className={animateCursor} />;
};

type CommandProps = {
  termCommand: string;
  setDone: () => void;
  children: React.ReactNode | React.ReactNode[];
  idx: number;
  commandIdx: React.RefObject<any>;
  endRef: React.RefObject<any>;
};

const Command: React.FC<CommandProps> = (props: CommandProps) => {
  const { termCommand, setDone, children, idx, commandIdx, endRef } = props;
  const [isDone, setIsDone] = useState(false);

  const terminalPrefix = 'gabeTimm:~$';

  useEffect(() => {
    if (idx === commandIdx.current) {
      // console.log(endRef.current?.parentElement?.scrollHeight);
      // console.log(endRef.current?.parentElement);
      // endRef.current?.parentElement?.scrollTo({
      //   top: endRef.current?.parentElement?.scrollHeight,
      //   left: 0,
      //   behavior: "smooth",
      // });
      endRef.current?.scrollIntoView(false);
      const animationTimeout = setTimeout(() => {
        setDone();
        setIsDone(true);
        clearTimeout(animationTimeout);
      }, 1000);
      return (): void => {
        clearTimeout(animationTimeout);
      };
    }
  }, [commandIdx, idx, setDone]);

  return idx <= commandIdx.current ? (
    <div className={cx(commandWrapperStyle, 'terminal-command')}>
      <span>{terminalPrefix}</span>
      <div className={commandStyle}>{termCommand}</div>
      {isDone && children}
    </div>
  ) : (
    <></>
  );
};

export const TerminalIntro: React.FC = () => {
  const commandsShown = useRef<number>(-2);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const cmdEndRef = useRef<HTMLInputElement>(null);

  const commands = [
    'Hi there!',
    'My name is Gabe.',
    '',
    "I'm a Full Stack engineer,",
    'and love solving complex problems.',
    '',
    'My main medium is is the web.',
    "I've worked on LMS applications,",
    "eCommerce websites, complex SPA's",
    'and much more!',
    '',
    'Take a look around!',
  ];

  useEffect(() => {
    const introTimer = setTimeout(() => {
      commandsShown.current = commandsShown.current + 1;
      setShouldUpdate(true);
      clearTimeout(introTimer);
    }, 4000);

    return (): void => {
      clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    console.log('Should Update');
  }, [shouldUpdate]);

  return (
    <div className={cx(terminalWrapperStyle(), 'terminal-wrapper')}>
      <div
        className={cx(terminalContainerStyle, animateText, 'terminal', 'crt')}
      >
        <div className={cx(terminalStyle)}>
          <IntroScroll
            commandsIndex={commandsShown}
            update={(): void => {
              commandsShown.current = commandsShown.current + 1;
              setShouldUpdate(!shouldUpdate);
            }}
          />
          {commands.map((command, idx) => (
            <Command
              key={command + idx}
              idx={idx}
              commandIdx={commandsShown}
              setDone={(): void => {
                commandsShown.current = commandsShown.current + 1;
                setShouldUpdate(!shouldUpdate);
              }}
              termCommand={command}
              endRef={cmdEndRef}
            >
              {idx === commands.length - 1 ? <Cursor /> : null}
            </Command>
          ))}
          <div ref={cmdEndRef} />
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
