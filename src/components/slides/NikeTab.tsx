import React from "react";
import { cx, css } from "@emotion/css";
import NBYLogo from "../../assets/NBYLogo.jpg";

const nikeTabStyle = css`
  padding-top: 40px;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const nikeTabTopNavStyle = css`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  div {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const Logo: React.FC = () => {
  const nikeLogoStyle = css`
    height: 100%;
    svg {
      height: 100%;
    }
  `;
  return (
    <div className={cx("nike-logo", nikeLogoStyle)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
        <g fillRule="evenodd" clipRule="evenodd">
          <path fill="#fff" fillOpacity="0" d="M0 0h192.756v192.756H0V0z" />
          <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
        </g>
      </svg>
    </div>
  );
};

const nikeTabNavInfo = css`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: visible;
  white-space: nowrap;
`;

const nikeTabTickerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #f7f7f7;
  color: black;
`;
const nikeTabBody = css`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media (min-width: 1921px) {
    max-width: 1440px;
  }
  @media (max-width: 1920px) {
    max-width: 1024px;
  }
`;

const nikeTabBodyRowLeft = css`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0;
    img {
      margin-bottom: 20px;
    }
  }
`;
const nbyLogo = css`
  display: flex;
  align-items: center;
  width: 300px;
  img {
    height: 300px;
    width: 300px;
  }
`;

const nbyInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  p {
    margin-top: 0;
  }
  @media (min-width: 568px) {
    padding-left: 20px;
  }
`;

const nikeTabFooterStyle = css`
  background-color: #111;
  width: 100%;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    padding: 10px 0;
    li {
      width: 45%;
      margin: 10px 0;
    }
  }
  @media (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media (max-width: 586px) {
    ul {
      padding: 20px;
      li {
        width: 100%;
      }
    }
  }
`;

export const NikeTab = () => {
  return (
    <div className={cx("nike-tab-container", nikeTabStyle)}>
      <div className={cx("nike-tab-top-nav", nikeTabTopNavStyle)}>
        <Logo />
        <div className={cx("nike-tab-top-nav-info", nikeTabNavInfo)}>
          <strong>Senior Applications Engineer</strong>
        </div>
        <div></div>
      </div>
      <div className={cx("nike-tab-ticker-container", nikeTabTickerStyle)}>
        March 2020 - Present
      </div>
      <div className={cx("nike-tab-body", nikeTabBody)}>
        <div className={cx("nike-tab-body-row", nikeTabBodyRowLeft)}>
          <div className={cx("nby-logo", nbyLogo)}>
            <img src={NBYLogo} />
          </div>
          <div className={cx("nike-tab-row-info", nbyInfoStyle)}>
            <p>
              Within the Nike By You capability, we use React 17 with TypeScript
              and Redux on the front-end and Spring Boot on the back-end, all of
              this on the AWS platform. All of this is to deliver an
              unparalelled product customization experience.
            </p>
            <p>
              To ensure our users never have the opportunity to get bored of our
              product, we carry out an agile methodology and practice CI/CD
              which allows us to always be delivering value to our users. We
              follow a rigorous QA and peer review cycle that ensures we, as the
              on-call developers, get to sleep at night.
            </p>
            <p>
              Below are some of the contributions I've made during my time at
              Nike.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("nike-tab-footer", nikeTabFooterStyle)}>
        <ul>
          <li>
            I've built a passthrough application that allows my team and I to
            run A/B tests on whether the user gets the legacy version of our
            customization platform, or the new version we released last quarter.
          </li>
          <li>
            We green-fielded a new customization platform that places our new 3D
            renderer at the forefront, increasing our conversion rate by nearly
            9%.
          </li>
          <li>
            During our innovation sprint, I used web-sockets to convert our
            single-user customization platform into a collaborative
            customization experience where multiple users could join a session,
            customize a shoe, and chat.
          </li>
          <li>
            During another innovation sprint, I created a node server that
            allows a user to share their shoe designs to what I call the
            community gallery. From within this gallery, users can comment,
            like, or even use their friends' designs as a jumping off point.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NikeTab;
