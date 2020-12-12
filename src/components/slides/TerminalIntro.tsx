import React, { useState, useEffect, useContext, useRef } from "react";
import { cx, css } from "@emotion/css";
import { getTextColor } from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";
import {
  scrollingAnimation,
  animateCursor,
  commandWrapperStyle,
  commandStyle,
  terminalWrapperStyle,
  terminalStyle,
  animateText,
  terminalContainerStyle,
} from "./slidesStyles";

const IntroScroll = (props: any) => {
  const { commandsIndex, update } = props;
  const asciiIntro = `
     ____       _          
    / ___| __ _| |__   ___ 
   | |  _ / _\` | '_ \\ / _ \\
   | |_| | (_| | |_) |  __/
    \\____|\\__,_|_.__/ \\___|
               _____ _     
              |_   _(_)_ __ ___  _ __ ___  
                | | | | '_ \` _ \\| '_ \` _ \\ 
                | | | | | | | | | | | | | |
                |_| |_|_| |_| |_|_| |_| |_|`;

  const asciiHtml = `<pre><code>${asciiIntro}</code></pre>`;
  const dangerHTML = { __html: asciiHtml };

  console.log("anim8n");

  const asciiIntroStyle = css`
    ${commandsIndex === -1
      ? `
      animation: ${scrollingAnimation} 4s steps(15, end);
      animation-iteration-count: 1;
      animation-delay: 0;`
      : ""}
    position: absolute;
    top: 0;
    margin: -60px auto 0;
    background-color: transparent;
  `;

  useEffect(() => {
    if (commandsIndex.current === -2) {
      const animationTimeout = setTimeout(() => {
        update();
        commandsIndex.current = commandsIndex.current + 1;
      }, 1000);

      return (): void => {
        clearTimeout(animationTimeout);
      };
    }
  }, [commandsIndex, update]);

  return commandsIndex.current >= -1 ? (
    <div className={asciiIntroStyle} dangerouslySetInnerHTML={dangerHTML} />
  ) : null;
};

const Cursor: React.FC = () => {
  return <div className={animateCursor} />;
};

const Command: React.FC<any> = (props: any) => {
  const { termCommand, setDone, children, idx, commandIdx } = props;
  const [isDone, setIsDone] = useState(false);

  const terminalPrefix = "gabeTimm:~$";

  useEffect(() => {
    console.log("IDX: ", idx);
    console.log("cmdIdx: ", commandIdx.current);
    if (idx === commandIdx.current) {
      const animationTimeout = setTimeout(() => {
        console.log(idx);
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
    <div className={cx(commandWrapperStyle, "terminal-command")}>
      <span>{terminalPrefix}</span>
      <div className={commandStyle}>{termCommand}</div>
      {isDone && children}
    </div>
  ) : (
    <></>
  );
};

export const TerminalIntro: React.FC = () => {
  const commandsShown = useRef(-2);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { light, dark, neon } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  const commands = [
    "Hi there!",
    "My name is Gabe.",
    "",
    "I'm a Full Stack engineer,",
    "and love solving complex problems.",
    "",
    "My main medium is is the web.",
    "I've worked on LMS applications,",
    "eCommerce websites, complex SPA's",
    "and much more!",
    "",
    "Take a look around!",
  ];

  useEffect(() => {
    const introTimer = setTimeout(() => {
      clearTimeout(introTimer);
      commandsShown.current = commandsShown.current + 1;
      setShouldUpdate(true);
    }, 4000);

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

  useEffect(() => {
    console.log("Should Update");
  }, [shouldUpdate]);

  return (
    <div className={cx(terminalWrapperStyle(textColor), "terminal-wrapper")}>
      <div className={cx(terminalContainerStyle, animateText)}>
        <div className={cx(terminalStyle, "terminal", "crt")}>
          <IntroScroll
            commandsIndex={commandsShown}
            update={() => {
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
            >
              {idx === commands.length - 1 ? <Cursor /> : null}
            </Command>
          ))}
          {/* {commandsShown.current >= 0 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[0]}
            />
          )}
          {commandsShown.current >= 1 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[1]}
            />
          )}
          {commandsShown.current >= 2 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[2]}
            />
          )}
          {commandsShown.current >= 3 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[3]}
            />
          )}
          {commandsShown.current >= 4 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[4]}
            />
          )}
          {commandsShown.current >= 5 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[5]}
            />
          )}
          {commandsShown.current >= 6 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[6]}
            />
          )}
          {commandsShown.current >= 7 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[7]}
            />
          )}
          {commandsShown.current >= 8 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[8]}
            />
          )}
          {commandsShown.current >= 9 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[9]}
            />
          )}
          {commandsShown.current >= 10 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[10]}
            />
          )}
          {commandsShown.current >= 11 && (
            <Command
              setDone={(): void => commandsShown.current = (commandsShown.current + 1)}
              termCommand={commands[11]}
            >
              <Cursor />
            </Command> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default TerminalIntro;
