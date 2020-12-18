import React from "react";
import { baseWrapperStyle } from "../styles";
import { cx } from "@emotion/css";

export const Wrapper: React.FC<any> = (props: any) => {
  return (
    <div className={cx(baseWrapperStyle, "wrapper")} {...props}>
      {props.children}
    </div>
  );
};

export default Wrapper;
