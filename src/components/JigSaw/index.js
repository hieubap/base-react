import React, { Children, cloneElement, useEffect, useState } from "react";
import { v4 } from "uuid";
/**
 * borderCustom: [{
 * + delta: x,
 * + position: 'top','right','bottom','left',
 * + type: -1,0,1
 * }]
 * 
 */
const JigSaw = ({
  width = 500,
  height = 500,
  border = [],
  borderCustom = [],
  backgroundColor = "none",
  bellySize = [90, 70],
  paddingContent = true,
  style,
  className,
  ...props
}) => {
  const [state, _setState] = useState({
    id: v4(),
    width: width + bellySize[1] * 2,
    height: height + bellySize[1] * 2,
    widthBelly: bellySize[0],
    heightBelly: bellySize[1],
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
    const { widthBelly: w, heightBelly: h } = state;
    const [top, right, bottom, left] = border;
    const W = state.width;
    const H = state.height;

    const pathLeft =
      left === 1
        ? `v ${H / 2 - w / 4 - h} C 0 ${H / 2 - w / 2},0 ${
            H / 2 + w / 2
          },${h} ${H / 2 + w / 4} v ${H / 2 - w / 4 - h}`
        : left === -1
        ? `v ${H / 2 - w / 4 - h} C ${2 * h} ${H / 2 - w / 2},${2 * h} ${
            H / 2 + w / 2
          },${h} ${H / 2 + w / 4} v ${H / 2 - w / 4 - h}`
        : `v ${H - 2 * h}`;
    const pathBottom =
      bottom === 1
        ? `h ${W / 2 - w / 4 - h} C ${W / 2 - w / 2} ${H},${
            W / 2 + w / 2
          } ${H},${W / 2 + w / 4} ${H - h} h ${W / 2 - w / 4 - h}`
        : bottom === -1
        ? `h ${W / 2 - w / 4 - h} C ${W / 2 - w / 2} ${H - 2 * h},${
            W / 2 + w / 2
          } ${H - 2 * h},${W / 2 + w / 4} ${H - h} h ${W / 2 - w / 4 - h}`
        : `h ${W - 2 * h}`;
    const pathRight =
      right === 1
        ? `v -${H / 2 - w / 4 - h} C ${W} ${H / 2 + w / 2},${W} ${
            H / 2 - w / 2
          },${W - h} ${H / 2 - w / 4} v -${H / 2 - w / 4 - h}`
        : right === -1
        ? `v -${H / 2 - w / 4 - h} C ${W - 2 * h} ${H / 2 + w / 2},${
            W - 2 * h
          } ${H / 2 - w / 2},${W - h} ${H / 2 - w / 4} v -${H / 2 - w / 4 - h}`
        : `v -${H - 2 * h}`;
    const pathTop =
      top === 1
        ? `h -${W / 2 - w / 4 - h} C ${W / 2 + w / 2} 0,${W / 2 - w / 2} 0,${
            W / 2 - w / 4
          } ${h} h -${W / 2 - w / 4 - h}`
        : top === -1
        ? `h -${W / 2 - w / 4 - h} C ${W / 2 + w / 2} ${2 * h},${
            W / 2 - w / 2
          } ${2 * h},${W / 2 - w / 4} ${h} h -${W / 2 - w / 4 - h}`
        : `h -${W - 2 * h}`;

    return `path('M ${h} ${h} ${pathLeft} ${pathBottom} ${pathRight} ${pathTop}')`;
  };

  return (
    <div
      className={`nh-jigsaw`}
      id={state.id}
      style={{
        width: state.width,
        height: state.height,
        marginLeft: -state.heightBelly,
        marginRight: -state.heightBelly,
        marginTop: -state.heightBelly,
        marginBottom: -state.heightBelly,
        backgroundColor,
        clipPath: state.clipPath,
        // position: "absolute",
        ...style,
      }}
    >
      <div
        className={`nh-jigsaw-content ${className}`}
        style={{
          padding: paddingContent ? state.heightBelly : 0,
          width: paddingContent ? width : width + bellySize[1] * 2,
          height: paddingContent ? height : height + bellySize[1] * 2,
        }}
      >
        {Children.map(props.children, (child) => {
          return cloneElement(child, { bellySize, width, height });
        })}
      </div>
    </div>
  );
};

export default JigSaw;
