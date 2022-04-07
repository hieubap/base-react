import React, { useMemo, useState, useEffect } from "react";

import styled from "styled-components";

const StyledRate = styled.div`
  i {
    margin: 0 5px;
    cursor: pointer;
    color: #ccc;
    transition: all 0.7s;

    &.active {
      color: var(--yellow);
    }
  }
`;

const Rate = ({ number = 5, value = 0 }) => {
  const [hover, setHover] = useState(0);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setSelect(value);
  }, [value]);

  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(i < hover || (i < select && !hover));
    }
    return arr;
  }, [number, hover, select]);

  const onEnter = (index) => () => {
    setHover(index + 1);
  };
  const onLeave = () => {
    setHover(0);
  };

  const onSelect = (index) => () => {
    setSelect(index + 1);
  };

  return (
    <StyledRate className="core-rate">
      {data.map((item, index) => (
        <i
          key={index}
          onMouseEnter={onEnter(index)}
          onMouseLeave={onLeave}
          onClick={onSelect(index)}
          class={`fa-solid fa-star ${item ? "active" : ""}`}
        ></i>
      ))}
    </StyledRate>
  );
};

Rate.propTypes = {};

export default Rate;
