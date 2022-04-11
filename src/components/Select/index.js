import React from "react";

const Select = ({
  value = "0",
  placeholder,
  options = [],
  onSelect,
  onChange,
}) => {
  return (
    <select
      value={value}
      onSelect={onSelect}
      onChange={onChange}
      placeholder={placeholder}
    >
      {options.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {};

export default Select;
