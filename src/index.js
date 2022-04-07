import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/index";
import "./ignore/style.scss";
import "./core.scss";
import "./assets/css/all.min.css";
import Contain from "./ignore/views/contain";
import CheckBox from "./components/Checkbox";
import Input from "./components/Input";
import Rate from "./components/Rate";

const mapColor = {
  blue: ["icon", "fa fa-check"],
  indigo: ["loading", "fa fa-check"],
  purple: ["disabled", "fa fa-check"],
  pink: ["pink"],
  red: ["red"],
  orange: ["orange"],
  yellow: ["yellow"],
  green: ["green"],
  teal: ["teal"],
  cyan: ["cyan"],
  white: ["white"],
  gray: ["gray"],
  primary: ["primary"],
  secondary: ["secondary"],
  success: ["success"],
  info: ["info"],
  warning: ["warning"],
  danger: ["danger"],
  light: ["light"],
  dark: ["dark"],
  focus: ["focus"],
  alternate: ["alternate"],
};

const Root = () => {
  return (
    <div className="main-id">
      <Contain title={"BUTTON"}>
        {Object.keys(mapColor).map((item, key) => (
          <Button
            key={key}
            color={item}
            loading={mapColor[item].includes("loading")}
            disabled={mapColor[item].includes("disabled")}
            icon={mapColor[item][1]}
          >
            {mapColor[item][0]}
          </Button>
        ))}
      </Contain>
      <Contain title={"CHECKBOX"}>
        <CheckBox>Hiệu lực</CheckBox>
        <CheckBox disabled={true}>Disabled</CheckBox>
      </Contain>
      <Contain title={"INPUT"}>
        <Input placeholder={"Input thường"}></Input>
        <Input value={"input with value"}></Input>
        <Input disabled={true} value={"input disabled"}></Input>
      </Contain>
      <Contain title={"RATE"}>
        <Rate number={5} value={4}></Rate>
        <Rate number={5}></Rate>
      </Contain>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
