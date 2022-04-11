import React from "react";
import { StyledTag } from "./styled";

const Tag = ({ className = "", children = "" }) => {
  return (
    <StyledTag className={className}>
      {children}
      <i class="fa-solid fa-xmark"></i>
    </StyledTag>
  );
};

Tag.propTypes = {};

export default Tag;
