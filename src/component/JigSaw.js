import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const JigSaw = ({
  width = 500,
  height = 500,
  border = [],
  backgroundColor = "crimson",
  style,
  ...props
}) => {
  const [state, _setState] = useState({
    id: v4(),
    width,
    height,
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  useEffect(() => {
    var mousePosition;
    var offset = [0, 0];
    var div;
    var isDown = false;

    div = document.getElementById(state.id);
    div.addEventListener(
      "mousedown",
      function (e) {
        isDown = true;
        offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
      },
      true
    );

    document.addEventListener(
      "mouseup",
      function () {
        isDown = false;
      },
      true
    );

    document.addEventListener(
      "mousemove",
      function (event) {
        event.preventDefault();
        if (isDown) {
          mousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
          div.style.left = mousePosition.x + offset[0] + "px";
          div.style.top = mousePosition.y + offset[1] + "px";
        }
      },
      true
    );
  }, []);

  useEffect(() => {
    setState({ clipPath: generatePath() });
  }, [border]);

  const generatePath = () => {
    const [top, right, bottom, left] = border;
    const w = width / 10;
    const h = height / 10;

    const pathLeft =
      left === 1
        ? `v ${h * 2} C 0 ${h * 3},0 ${h * 7},${w * 2} ${h * 6} v ${h * 2}`
        : left === -1
        ? `v ${h * 2} C ${w * 4} ${h * 3},${w * 4} ${h * 7},${w * 2} ${
            h * 6
          } v ${h * 2}`
        : `v ${h * 6}`;
    const pathBottom =
      bottom === 1
        ? `h ${w * 2} C ${w * 3} ${h * 10},${w * 7} ${h * 10},${w * 6} ${
            h * 8
          } h ${w * 2}`
        : bottom === -1
        ? `h ${w * 2} C ${w * 3} ${h * 6},${w * 7} ${h * 6},${w * 6} ${
            h * 8
          } h ${w * 2}`
        : `h ${w * 6}`;
    const pathRight =
      right === 1
        ? `v -${h * 2} C ${w * 10} ${h * 7},${w * 10} ${h * 3},${w * 8} ${
            h * 4
          } v -${h * 2}`
        : right === -1
        ? `v -${h * 2} C ${w * 6} ${h * 7},${w * 6} ${h * 3},${w * 8} ${
            h * 4
          } v -${h * 2}`
        : `v -${h * 6}`;
    const pathTop =
      top === 1
        ? `h -${w * 2} C ${w * 7} 0,${w * 3} 0,${w * 4} ${h * 2} h -${w * 2}`
        : top === -1
        ? `h -${w * 2} C ${w * 7} ${h * 4},${w * 3} ${h * 4},${w * 4} ${
            h * 2
          } h -${w * 2}`
        : `h -${w * 6}`;

    return `path('M ${w * 2} ${
      h * 2
    } ${pathLeft} ${pathBottom} ${pathRight} ${pathTop}')`;
  };

  console.log(state, "state");

  return (
    <div
      id={state.id}
      style={{
        width,
        height,
        marginLeft: -width / 5,
        marginRight: -width / 5,
        marginTop: -height / 5,
        marginBottom: -height / 5,
        backgroundColor,
        clipPath: state.clipPath,
        // position: "absolute",
        ...style,
      }}
    ></div>
  );
};

export default JigSaw;
