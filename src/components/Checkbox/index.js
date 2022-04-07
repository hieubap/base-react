import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.label`
  display: inline-flex;
  line-height: unset;
  align-items: baseline;
  span:first-child {
    top: 2px;
    position: relative;
  }
  span:last-child {
    padding: 0 3px;
    &.core-checkbox-disable {
      color: #00000040;
    }
  }
  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const CheckBox = ({ children, checked, disabled, onChange = () => {} }) => {
  return (
    <StyledCheckbox className="core-checkbox">
      <span>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </span>
      <span className={`${disabled ? "core-checkbox-disable" : ""}`}>
        {children}
      </span>
    </StyledCheckbox>
  );
};

export default CheckBox;
