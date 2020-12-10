import React from "react";
import { css, cx } from "@emotion/css";

export const MyAvatar = () => {
  const avatarWrapperStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 230px;
    transform: rotate(45deg);
    overflow: hidden;
    background-color: white;
    box-shadow: 0 0 10px 0 white;
    img {
      transform: rotate(-45deg);
      margin-right: -30px;
      margin-bottom: -30px;
    }
  `;

  const avatarContainer = css`
    margin: 50px 0;
  `;
  return (
    <div className={avatarContainer}>
      <div className={cx(avatarWrapperStyle, "avatar-wrapper")}>
        <img src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light" />
      </div>
    </div>
  );
};
