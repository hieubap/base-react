import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  outline: 0;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  padding: 4px 10px;
  color: #000000d9;
  height: 20px;
  font-size: 14px;

  &:hover:not(:disabled) {
    border-color: var(--cyan);
  }

  &:focus {
    border-color: var(--cyan);
    box-shadow: 0 0 2px var(--cyan);
  }
  &:disabled,
  &::placeholder {
    color: #ccc;
  }
`;

const Input = ({ className, placeholder, onChange, value, disabled }) => {
  return (
    <StyledInput
      className={`core-input ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    ></StyledInput>
  );
};

export default Input;
