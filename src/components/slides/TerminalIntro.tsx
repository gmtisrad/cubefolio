import React, { useState } from "react";
import { cx, css, keyframes } from "@emotion/css";

const terminalWrapperStyle = css`
  width: 100%;
  height: 100%;
`;

const terminalStyle = css`
  margin: 5%;
  height: 90%;
  width: 90%;
  background-color: black;
  border-radius: 20px;
  display: flex;
  color: green;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 50px;
  font-size: 24px;
`;

const Command = (props: any) => {
  const { termCommand, setDone } = props;

  const typingAnimation = keyframes`
    0% { width: 0 }
    100% { width: 100% }
  `;

  const commandStyle = css`
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.15em;
    animation: ${typingAnimation} 3.5s steps(30, end);
  `;

  const terminalPrefix = "gabeTimm:~$";

  setTimeout(() => {
    setDone();
  }, 3500);

  return (
    <div
      className={cx(
        css`
          display: flex;
          width: 100%;
          justify-content: flex-start;
          align-items: flex-start;
          span {
            margin-right: 10px;
          }
        `,
        "terminal-command"
      )}
    >
      <span>{terminalPrefix}</span>
      <div className={commandStyle}>{termCommand}</div>
    </div>
  );
};

export const TerminalIntro: React.FC = () => {
  const [commandsShown, setCommandsShown] = useState(0);

  const commands = [
    "Hi there!",
    "My name is Gabe.",
    "I'm a Full Stack engineer.",
    "I love solving complex problems.",
  ];

  return (
    <div className={cx(terminalWrapperStyle, "terminal-wrapper")}>
      <div className={cx(terminalStyle, "terminal")}>
        {commandsShown >= 0 && (
          <Command
            setDone={(): void => setCommandsShown(commandsShown + 1)}
            termCommand={commands[0]}
          />
        )}
        {commandsShown >= 1 && (
          <Command
            setDone={(): void => setCommandsShown(commandsShown + 1)}
            termCommand={commands[1]}
          />
        )}
        {commandsShown >= 2 && (
          <Command
            setDone={(): void => setCommandsShown(commandsShown + 1)}
            termCommand={commands[2]}
          />
        )}
        {commandsShown >= 3 && (
          <Command
            setDone={(): void => setCommandsShown(commandsShown + 1)}
            termCommand={commands[3]}
          />
        )}
      </div>
    </div>
  );
};

export default TerminalIntro;
