import React from "react";
import { StyledBadge } from "./styled";

const mapStyled = {
  blue: { color: "white" },
  indigo: { color: "white" },
  purple: { color: "white" },
  pink: { color: "white" },
  red: { color: "white" },
  orange: { color: "white" },
  yellow: { color: "white" },
  green: { color: "white" },
  teal: { color: "white" },
  cyan: { color: "white" },
  white: { color: "#888" },
  gray: { color: "white" },
  primary: { color: "white" },
  secondary: { color: "white" },
  success: { color: "white" },
  info: { color: "white" },
  warning: { color: "white" },
  danger: { color: "white" },
  light: { color: "#666" },
  dark: { color: "white" },
  focus: { color: "white" },
  alternate: { color: "white" },
};

const Badge = ({ children, className, color = "green", onClick = () => {} }) => {
  
    const styled = mapStyled[color];

  return (
    <StyledBadge
      className={`${className} hi-badge`}
      background={color}
      color={styled.color}
      onClick={onClick}
    >
      {children}
    </StyledBadge>
  );
};

export default Badge;
