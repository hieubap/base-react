import React, { Component, useState } from "react";
import "./App.scss";
import JigSaw from "./component/JigSaw";

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
        <JigSaw width={400} height={400} border={state.border} />
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
        <div className="edit-btn" onClick={borderChange(3)}>
          Thêm mảnh
        </div>

        <JigSaw width={400} height={400} border={[1,1,1,1]} backgroundColor="blueviolet" />
        <JigSaw width={400} height={400} border={[1,-1,0,1]} backgroundColor="brown"/>
        <JigSaw width={400} height={400} border={[-1,-1,-1,1]} backgroundColor="darkblue"/>
      </div>
    </div>
  );
};

export default App;
