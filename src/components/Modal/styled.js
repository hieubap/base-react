import styled from "styled-components";

export const StyledModal = styled.div`
  display: ${(pre) => (pre.visible ? "block" : "none")};
  .modal-layer {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    z-index: 2;
  }
  .modal-content {
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    z-index: 3;
    left: 0;
    top: 0;
    &-layer {
      position: relative;
      width: ${(props) => props.width + "px"};
      min-height: 450px;
      height: auto;
      top: 50px;
      margin: auto;
      padding: 50px 0;
    }
    &-main {
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      height: auto;
      background-color: white;
      position: relative;
      .md-content {
        &-header {
          border-bottom: 1px solid #ccc;
          padding: 8px;
          text-align: center;
          &-close {
            position: absolute;
            right: 10px;
            top: 6px;
            padding: 0 5px;
            border-radius: 50%;
            cursor: pointer;
            :hover {
              background-color: #ccc;
            }
          }
        }
        &-body {
          min-height: 250px;
        }
        &-footer {
          border-top: 1px solid #ccc;
          padding: 8px;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }
`;
