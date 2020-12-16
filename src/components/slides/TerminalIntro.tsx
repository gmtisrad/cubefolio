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
  scrollingAnimationMobile,
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
  const asciiIntro2 = `
  _____\/\\\\\\\\\\\\\\\\\\\\\\\\_________________\/\\\\\\_______________________        \r\n ___\/\\\\\\\/\/\/\/\/\/\/\/\/\/_________________\\\/\\\\\\_______________________       \r\n  __\/\\\\\\____________________________\\\/\\\\\\_______________________      \r\n   _\\\/\\\\\\____\/\\\\\\\\\\\\\\__\/\\\\\\\\\\\\\\\\\\____\\\/\\\\\\____________\/\\\\\\\\\\\\\\\\__     \r\n    _\\\/\\\\\\___\\\/\/\/\/\/\\\\\\_\\\/\/\/\/\/\/\/\/\\\\\\___\\\/\\\\\\\\\\\\\\\\\\____\/\\\\\\\/\/\/\/\/\\\\\\_    \r\n     _\\\/\\\\\\_______\\\/\\\\\\___\/\\\\\\\\\\\\\\\\\\\\__\\\/\\\\\\\/\/\/\/\\\\\\__\/\\\\\\\\\\\\\\\\\\\\\\__   \r\n      _\\\/\\\\\\_______\\\/\\\\\\__\/\\\\\\\/\/\/\/\/\\\\\\__\\\/\\\\\\__\\\/\\\\\\_\\\/\/\\\\\/\/\/\/\/\/\/___  \r\n       _\\\/\/\\\\\\\\\\\\\\\\\\\\\\\\\/__\\\/\/\\\\\\\\\\\\\\\\\/\\\\_\\\/\\\\\\\\\\\\\\\\\\___\\\/\/\\\\\\\\\\\\\\\\\\\\_ \r\n        __\\\/\/\/\/\/\/\/\/\/\/\/\/_____\\\/\/\/\/\/\/\/\/\\\/\/__\\\/\/\/\/\/\/\/\/\/_____\\\/\/\/\/\/\/\/\/\/\/__\r\n           __\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_______________________________________________        \r\n          _\\\/\/\/\/\/\/\/\\\\\\\/\/\/\/\/________________________________________________       \r\n           _______\\\/\\\\\\________\/\\\\\\_________________________________________      \r\n            _______\\\/\\\\\\_______\\\/\/\/_____\/\\\\\\\\\\__\/\\\\\\\\\\______\/\\\\\\\\\\__\/\\\\\\\\\\___     \r\n             _______\\\/\\\\\\________\/\\\\\\__\/\\\\\\\/\/\/\\\\\\\\\\\/\/\/\\\\\\__\/\\\\\\\/\/\/\\\\\\\\\\\/\/\/\\\\\\_    \r\n              _______\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\_\\\/\/\\\\\\__\\\/\\\\\\_\\\/\\\\\\_\\\/\/\\\\\\__\\\/\\\\\\_   \r\n               _______\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\__\\\/\\\\\\__\\\/\\\\\\_\\\/\\\\\\__\\\/\\\\\\__\\\/\\\\\\_  \r\n                _______\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\__\\\/\\\\\\__\\\/\\\\\\_\\\/\\\\\\__\\\/\\\\\\__\\\/\\\\\\_ \r\n                 _______\\\/\/\/________\\\/\/\/__\\\/\/\/___\\\/\/\/___\\\/\/\/__\\\/\/\/___\\\/\/\/___\\\/\/\/__
  `;

  const asciiIntro3 = `
                                ___          ___     \r\n                               \/\\__\\        \/\\  \\    \r\n                              \/:\/ _\/_      |::\\  \\   \r\n                             \/:\/ \/\\__\\     |:|:\\  \\  \r\n                            \/:\/ \/:\/ _\/_  __|:|\\:\\  \\ \r\n                           \/:\/_\/:\/ \/\\__\\\/::::|_\\:\\__\\\r\n                           \\:\\\/:\/ \/:\/  \/\\:\\~~\\  \\\/__\/\r\n                            \\::\/_\/:\/  \/  \\:\\  \\      \r\n                             \\:\\\/:\/  \/    \\:\\  \\     \r\n                              \\::\/  \/      \\:\\__\\    \r\n                               \\\/__\/___     \\\/__\/    \r\n                      _____        \/\\  \\             \r\n                     \/::\\  \\      |::\\  \\            \r\n                    \/:\/\\:\\  \\     |:|:\\  \\           \r\n                   \/:\/ \/::\\__\\  __|:|\\:\\  \\          \r\n                  \/:\/_\/:\/\\:|__|\/::::|_\\:\\__\\         \r\n                  \\:\\\/:\/ \/:\/  \/\\:\\~~\\  \\\/__\/         \r\n                   \\::\/_\/:\/  \/  \\:\\  \\               \r\n                    \\:\\\/:\/  \/    \\:\\  \\              \r\n              ___    \\::\/  \/      \\:\\__\\             \r\n             \/\\  \\    \\\/__\/        \\\/__\/             \r\n            \/::\\  \\      ___                         \r\n           \/:\/\\:\\  \\    \/\\__\\                        \r\n          \/:\/ \/::\\  \\  \/:\/__\/                        \r\n         \/:\/_\/:\/\\:\\__\\\/::\\  \\                        \r\n         \\:\\\/:\/  \\\/__\/\\\/\\:\\  \\__                     \r\n          \\::\/__\/      ~~\\:\\\/\\__\\                    \r\n      ___  \\:\\  \\         \\::\/  \/                    \r\n     \/\\__\\  \\:\\__\\        \/:\/  \/                     \r\n    \/:\/ _\/_  \\\/__\/___     \\\/__\/                      \r\n   \/:\/ \/\\  \\     \/\\__\\                               \r\n  \/:\/ \/::\\  \\   \/:\/  \/                               \r\n \/:\/__\\\/\\:\\__\\ \/:\/__\/                                \r\n \\:\\  \\ \/:\/  \/\/::\\  \\                                \r\n  \\:\\  \/:\/  \/\/:\/\\:\\  \\                               \r\n   \\:\\\/:\/  \/ \\\/__\\:\\  \\                              \r\n    \\::\/  \/       \\:\\__\\                             \r\n     \\\/__\/         \\\/__\/                             
  `;

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
    if (commandsIndex.current === -1) {
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

const Command: React.FC<any> = (props: any) => {
  const { termCommand, setDone, children, idx, commandIdx, endRef } = props;
  const [isDone, setIsDone] = useState(false);

  const terminalPrefix = "gabeTimm:~$";

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
  const cmdEndRef = useRef<HTMLInputElement>(null);

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
      commandsShown.current = commandsShown.current + 1;
      setShouldUpdate(true);
      clearTimeout(introTimer);
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
      {/* <div className={cx(terminalContainerStyle, animateText)}> */}
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
            endRef={cmdEndRef}
          >
            {idx === commands.length - 1 ? <Cursor /> : null}
          </Command>
        ))}
        <div ref={cmdEndRef} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default TerminalIntro;
