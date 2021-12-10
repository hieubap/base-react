import React, { Component, useState } from "react";
import "./App.scss";
import JigSaw from "./component/JigSaw";

const WIDTH = 200;
const HEIGHT = 200;

const COLOR = ["", "", ""];
const data = [
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [0, 1, 1, 1],
    backgroundColor: "blueviolet",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [0, -1, -1, 1],
    backgroundColor: "darkcyan",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [1, 1, 1, 1],
    backgroundColor: "darkgreen",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [-1, 1, -1, 1],
    backgroundColor: "goldenrod",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [1, 1, 1, 1],
    backgroundColor: "brown",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [1, 1, 1, 1],
    backgroundColor: "blueviolet",
  },
  {
    style: { left: 100, top: 100 },
    width: WIDTH,
    height: HEIGHT,
    border: [1, 1, 1, 1],
    backgroundColor: "crimson",
  },
];

const App = () => {
  const [state, _setState] = useState({
    border: [1, 0, -1, 1],
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const getTypeName = (index) => {
    if (state.border[index] === 1) return "LỒI";
    if (state.border[index] === -1) return "LÕM";
    return "PHẲNG";
  };

  const borderChange = (index) => () => {
    const newBorder = Object.assign([], state.border);
    newBorder[index] = ((newBorder[index] + 2) % 3) - 1;
    setState({ border: newBorder });
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div className="edit-btn" onClick={borderChange(0)}>
          trên: {getTypeName(0)}
        </div>
        <div className="edit-btn" onClick={borderChange(1)}>
          phải: {getTypeName(1)}
        </div>
        <div className="edit-btn" onClick={borderChange(2)}>
          dưới: {getTypeName(2)}
        </div>
        <div className="edit-btn" onClick={borderChange(3)}>
          trái: {getTypeName(3)}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: 400,
          border: "1px solid #999",
          marginTop: 100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {data.map((item) => (
          <JigSaw {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
