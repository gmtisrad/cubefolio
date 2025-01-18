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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: #5f5f5f;
  border-bottom: 1px solid #888888;
  min-height: 35px;
  flex-shrink: 0;
`;

export const topNavTabsStyle = css`
  display: flex;
  overflow-x: hidden;
  flex: 1;
  min-width: 0;
`;

export const topNavTabStyle = css`
  display: flex;
  align-items: center;
  color: #e1e1e1;
  height: 100%;
  padding: 8px 16px;
  background: #696969;
  border-right: 1px solid #888888;
  font-size: 13px;
  transition: background-color 0.2s;
  cursor: pointer;

  span {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background: #777777;
  }
`;

export const activeTabStyle = css`
  background: #efefef;
  color: #333;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: #efefef;
  }

  &:hover {
    background: #efefef;
  }
`;

export const topNavControlsStyle = css`
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
`;

export const topNavCloseStyle = css`
  width: 45px;
  color: #e1e1e1;
  background-color: #d85858;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #c75050;
    color: white;
  }
`;

export const parthenonDutyListStyle = css`
  text-align: left;
`;

export const parthenonDutyListItemStyle = css`
  margin: 5px 0;
`;

export const scrollingAnimation = keyframes`
      0% { transform: translateY(100%) rotate(63deg) }
      100% { transform: translateY(0%) rotate(63deg) }
    `;

export const scrollingAnimationMobile = keyframes`
      0% { transform: translateY(200%) rotate(63deg) }
      100% { transform: translateY(0) rotate(63deg) }
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

export const terminalWrapperStyle = () => css`
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
  font-size: 18px;
  animation: ${turnOnStyle} 4s 1;
  pre {
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    code {
      font-size: 10px;
      transform-origin: center;
      @media (min-width: 769px) {
        transform: scale(0.9);
      }
      @media (max-width: 768px) {
        transform: scale(0.7);
      }
    }
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 568px) {
    font-size: 12px;
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
