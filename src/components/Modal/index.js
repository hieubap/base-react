import React, { useState } from "react";
import Button from "../Button";
import { StyledModal } from "./styled";

const Modal = ({
  width = 400,
  height = 400,
  visible = null,
  children,
  title = "",
  textCancel = "Hủy",
  textOk = "Xong",
  onCancel,
}) => {
  const [state, _setState] = useState({ visible });
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const _onCancel = onCancel
    ? onCancel
    : () => {
        setState({ visible: false });
      };

  return (
    <StyledModal
      visible={visible != null ? visible : state.visible}
      width={width}
      height={height}
    >
      <div className="modal-layer"></div>
      <div className="modal-content">
        <div className="modal-content-layer">
          <div className="modal-content-main">
            <div className="md-content-header">
              {title}
              <div className="md-content-header-close" onClick={_onCancel}>
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="md-content-body">{children}</div>

            <div className="md-content-footer">
              <div className="btn-content">
                <Button icon="fa fa-times" color="white" onClick={_onCancel}>
                  {textCancel}
                </Button>
              </div>
              <div className="btn-content">
                <Button icon="fa fa-check">{textOk}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
