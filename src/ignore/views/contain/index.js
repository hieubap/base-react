import React from "react";
import { StyledContain } from "./styled";

const Contain = ({ children, title }) => {
  return (
    <StyledContain>
      <div className="contain-title">{title}</div>
      <div className="contain-child">{children}</div>
    </StyledContain>
  );
};

export default Contain;
