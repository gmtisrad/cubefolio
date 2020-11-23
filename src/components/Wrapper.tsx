import React from "react";
import { baseWrapperStyle } from "../styles";

export const Wrapper: React.FC<any> = (props: any) => {
  return (
    <div className={baseWrapperStyle} {...props}>
      {props.children}
    </div>
  );
};

export default Wrapper;
