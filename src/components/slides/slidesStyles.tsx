import { css, keyframes } from "@emotion/css";

export const parthenonBodyStyle = css`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  // background-color: #2f5e79;
  background: linear-gradient(135deg, #284b67, #2f5e79);
`;

export const parthInfo = css`
  padding: 0 20px;
`;

export const projectWrapperStyle = css`
  height: 100%;
  width: 45%;
  overflow: hidden;
  margin: 0 auto;
`;

export const parthenonImageStyle = css`
  height: 125px;
`;

export const projectsStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f8f8f8;
  color: black;
`;

export const parthenonHeaderStyle = css`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const myExperienceContainerstyle = css`
  width: 100%;
  height: 100%;
`;

export const myExperienceWrapperStyle = css`
  position: relative;
  height: 90%;
  width: 90%;
  background-color: white;
  border: 1px solid black;
  margin: 5%;
`;

export const topNavStyle = css`
  width: 90%;
  height: 40px;
  position: fixed;
  top: 5%;
  left: 5%;
  // background-color: #5f5f5f;
  background: linear-gradient(0deg, #606060, #696969);
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #888888;
`;

export const topNavTabsStyle = css`
  display: flex;
  align-items: center;
  padding-left: 1px;
`;

export const topNavControlsStyle = css``;

export const topNavCloseStyle = css`
  height: 40px;
  width: 40px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export const topNavTabStyle = css`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 150px;
  padding: 0 10px;
  align-items: center;
  border-right: 1px solid #888888;
  span {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const activeTabStyle = css`
  background-color: #efefef;
  border-radius: 15px 15px 0 0;
  max-width: unset;
  padding-top: 8px;
  padding-bottom: 10px;
  color: black;
  border-right: 0;
`;

export const parthenonDutyListStyle = css`
  text-align: left;
`;

export const parthenonDutyListItemStyle = css`
  margin: 5px 0;
`;

export const scrollingAnimation = keyframes`
      0% { transform: translateY(100%) }
      35% { transform: translateY(43%)}
      65% { transform: translateY(43%)}
      100% { transform: translateY(0%) }
    `;

export const terminalWrapperStyle = (textColor: string) => css`
  width: 100%;
  height: 100%;
  border: 1px solid ${textColor};
`;

export const turnOnStyle = keyframes`
  0%{
    transform:scale(1,0.8) translate3d(0,0,0);
    -webkit-filter:brightness(30);
    filter:brightness(30);
    opacity:1;
  }
  3.5%{
    transform:scale(1,0.8) translate3d(0,100%,0);
  }
  
  3.6%{
    transform:scale(1,0.8) translate3d(0,-100%,0);
    opacity:1;
  } 
  
  9%{
    transform:scale(1.3,0.6) translate3d(0,100%,0);
    -webkit-filter:brightness(30);
    filter:brightness(30);
    opacity:0;
  }
  
  
  
  11%{
    transform:scale(1,1) translate3d(0,0,0);
    -webkit-filter:contrast(0) brightness(0) ;
    filter:contrast(0) brightness(0);
    opacity:0;
  }
  
  100%{
    transform:scale(1,1) translate3d(0,0,0);
    -webkit-filter:contrast(1) brightness(1.2) saturate(1.3);
    filter:contrast(1) brightness(1.2) saturate(1.3);
    opacity:1;
  }
`;

export const shiftyText = keyframes`
  0% {
    text-shadow: green 0px 0px 3px;
  }
  10% {
    text-shadow: green 1px 0px 3px;
  }
  20% {
    text-shadow: green 1px 1px 3px;
  }
  30% {
    text-shadow: green 0px 1px 3px;
  }
  40% {
    text-shadow: green 0px 0px 3px;
  }
  50% {
    text-shadow: green 0px -1px 3px;
  }
  60% {
    text-shadow: green -1px -1px 3px;
  }
  70% {
    text-shadow: green -1px 0px 3px;
  }
  100% {
    text-shadow: green 0px 0px 3px;
  }
`;

export const animateText = css`
  animation: ${shiftyText} 2s infinite;
`;

export const terminalStyle = css`
  position: relative;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    circle at center,
    #020600 0%,
    #020600 58%,
    #020600 80%,
    #020600 89%,
    black 100%
  );
  border-radius: 20px;
  display: flex;
  color: green;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 10px 10px;
  font-size: 24px;
  overflow: hidden;
  animation: ${turnOnStyle} 4s 1;
  pre {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const blink = keyframes`
    0% { opacity: 1;}
    5% { opacity: 0;}
    35% { opacity: 0;}
    100% { opacity: 1;}
  `;
export const animateCursor = css`
  height: 80%;
  width: 10px;
  margin: auto auto auto 0;
  background-color: green;
  animation-name: ${blink};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
`;

export const typingAnimation = keyframes`
    0% { width: 0 }
    100% { width: 100% }
  `;

export const commandStyle = css`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 1s steps(30, end);
`;

export const commandWrapperStyle = css`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  span {
    margin-right: 10px;
  }
`;

export const terminalContainerStyle = css`
  width: 90%;
  height: 90%;
  background-color: black;
  margin: 5%;
  border-radius: 20px;
  overflow: hidden;
`;
