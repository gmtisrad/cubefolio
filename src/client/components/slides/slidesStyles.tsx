import { css, keyframes } from '@emotion/css';

export const parthenonBodyStyle = css`
  height: 100%;
  width: 100%;
  padding: 20px;
  color: white;
  overflow: auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.6;
  pointer-events: auto;
`;

export const parthInfo = css`
  padding: 15px;
  font-size: 16px;
  line-height: 1.6;
  max-width: 1200px;
  margin: 0 auto;
  pointer-events: auto;
`;

export const projectWrapperStyle = css`
  height: auto;
  width: 45%;
  overflow: hidden;
  margin: 10px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const parthenonImageStyle = css`
  height: 80px;
  width: auto;
  margin: 10px 0;
`;

export const projectsStyle = css`
  width: 100%;
  background-color: #f8f8f8;
  color: black;
  padding: 25px 15px;
  margin-top: 20px;
  border-radius: 8px;
  pointer-events: auto;
`;

export const projectCardsStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;
  pointer-events: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const parthenonHeaderStyle = css`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: auto;

  h3 {
    margin: 15px 0 8px;
    font-size: 20px;
  }

  span {
    font-size: 16px;
    opacity: 0.9;
  }
`;

export const myExperienceContainerstyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`;

export const myExperienceWrapperStyle = css`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  pointer-events: auto;
`;

export const topNavStyle = css`
  width: 100%;
  height: 40px;
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
  max-width: 100%;
  font-size: 14px;
`;

export const topNavControlsStyle = css``;

export const topNavCloseStyle = css`
  height: 40px;
  width: 40px;
  color: white;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export const topNavTabStyle = css`
  display: flex;
  align-items: center;
  color: white;
  height: 100%;
  padding: 0 10px;
  align-items: center;
  max-width: 200px;
  border-right: 1px solid #888888;
  font-size: 14px;
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
  padding-top: 8px;
  padding-bottom: 10px;
  max-width: 150px;
  color: black;
  border-right: 0;
  @media (min-width: 1024px) {
    max-width: unset;
  }
`;

export const parthenonDutyListStyle = css`
  text-align: left;
`;

export const parthenonDutyListItemStyle = css`
  margin: 5px 0;
`;

export const scrollingAnimation = keyframes`
      0% { transform: translateY(100%) rotate(65deg) }
      100% { transform: translateY(0%) rotate(65deg) }
    `;

export const scrollingAnimationMobile = keyframes`
      0% { transform: translateY(200%) }
      100% { transform: translateY(0) }
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

export const terminalWrapperStyle = (textColor: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow-y: hidden;
  overflow-x: hidden;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(
    circle at center,
    #020600 0%,
    #020600 58%,
    #020600 80%,
    #020600 89%,
    black 100%
  );
  display: flex;
  color: green;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 10px 10px;
  font-size: 22px;
  animation: ${turnOnStyle} 4s 1;
  pre {
    display: flex;
    overflow: hidden;
    justify-content: center;
    margin-left: -10px;
  }
  @media (min-width: 1024px) {
    font-size: 26px;
    pre {
      code {
        font-size: 12px;
      }
    }
  }
  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 568px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    pre {
      code {
        font-size: 10px;
      }
    }
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
  width: 100%;
  height: 100%;
  background-color: black;
`;
