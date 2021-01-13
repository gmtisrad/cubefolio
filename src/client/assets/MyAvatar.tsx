import React from "react";
import { cx } from "@emotion/css";
import { avatarWrapperStyle } from "../styles";

export const MyAvatar: React.FC = () => {
  return (
    <div className={cx(avatarWrapperStyle, "avatar-wrapper")}>
      <img
        alt="my-avatar"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
      />
    </div>
  );
};
