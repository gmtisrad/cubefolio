import React from "react";
import { topNavTabStyle, activeTabStyle } from "./slides/slidesStyles";
import { cx } from "@emotion/css";

export const Tab: React.FC<any> = (props: any) => {
  const { name, active, switchTab } = props;
  return (
    <div
      className={cx(
        "top-nav-tab",
        topNavTabStyle,
        active ? activeTabStyle : ""
      )}
      onClick={(): void => switchTab()}
      title={name}
    >
      <span>{name}</span>
    </div>
  );
};

export default Tab;
