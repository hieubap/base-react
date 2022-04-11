import React, { forwardRef } from "react";
import { StyledButton } from "./style";

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

const Button = (
  {
    icon,
    children,
    color = "green",
    disabled,
    loading,
    onClick = () => {},
    className = "",
    ...props
  },
  ref
) => {
  const styled = mapStyled[color];

  return (
    <StyledButton
      ref={ref}
      className={`${className} rapid-btn ${loading ? ".loading" : ""}`}
      background={color}
      color={styled.color}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <div className={`rapid-btn-wrapper ${icon ? "" : "no-icon"}`}>
        <span className="rapid-btn-wrapper-content">{children}</span>
        {loading ? (
          <div className="rapid-btn-wrapper-content-loading">
            <i className="fa-solid fa-loader"></i>
          </div>
        ) : icon ? (
          <i className={`rapid-btn-wrapper-icon ${icon}`}></i>
        ) : (
          <></>
        )}
      </div>
    </StyledButton>
  );
};

export default forwardRef(Button);
