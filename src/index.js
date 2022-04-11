import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/index";
import "./ignore/style.scss";
import "./core.scss";
import "./assets/css/all.min.css";
import Contain from "./ignore/views/contain";
import CheckBox from "./components/Checkbox";
import Input from "./components/Input";
import Rate from "./components/Rate";
import Select from "./components/Select";
import Modal from "./components/Modal";
import Badge from "./components/Badge";
import Upload from "./components/Upload";
import TableComponent from "./ignore/tableComponent";

const breakWidth = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px",
};

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
  const [state, _setState] = useState({
    modalVisible1: false,
    modalVisible2: false,
  });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };
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
            className="button-child"
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
      <Contain title={"SELECT"}>
        <Select
          onSelect={(e) => {
            console.log(e, "select");
          }}
          onChange={(e) => {
            console.log(e, "change");
          }}
          placeholder="Chọn ..."
          options={[
            { label: "Option 1", value: 1 },
            { label: "Option 2", value: 2 },
            { label: "Option 3", value: 3 },
          ]}
        ></Select>
      </Contain>
      <Contain title={"MODAL"}>
        <Button
          onClick={() => {
            setState({ modalVisible1: true });
          }}
        >
          Show Modal 1
        </Button>
        <Button
          onClick={() => {
            setState({ modalVisible2: true });
          }}
        >
          Show Modal 2
        </Button>
        <Modal
          visible={state.modalVisible1}
          onCancel={() => setState({ modalVisible1: false })}
          title="Title"
        ></Modal>
        <Modal
          visible={state.modalVisible2}
          onCancel={() => setState({ modalVisible2: false })}
          title="Title 2"
        >
          <img
            style={{ width: "100%" }}
            alt=""
            src={"https://static.toiimg.com/photo/82343395.cms"}
          />
        </Modal>
      </Contain>
      <Contain title={"BADGE"}>
        {Object.keys(mapColor).map((item, key) => (
          <Badge key={key} className="badge-child" color={item}>
            {mapColor[item][0]}
          </Badge>
        ))}
      </Contain>
      {/* todo */}
      <Contain title={"CARD"}></Contain>
      {/* todo */}
      <Contain title={"COLLAPSE"}></Contain>
      {/* todo */}
      <Contain title={"MESSAGE"}></Contain>
      {/* todo */}
      <Contain title={"POPOVER"}></Contain>
      {/* todo */}
      <Contain title={"TABLE"}>
        <TableComponent></TableComponent>
      </Contain>
      {/* todo */}
      <Contain title={"TABS"}></Contain>
      {/* todo */}
      <Contain title={"TAG"}></Contain>
      {/* todo */}
      <Contain title={"TOOLTIP"}></Contain>
      {/* todo */}
      <Contain title={"UPLOAD"}>
        <Upload></Upload>
      </Contain>
      {/* todo */}
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
