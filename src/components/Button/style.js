import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  cursor: pointer;

  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0px 10px;
  margin-right: 5px;
  font-size: 14px;
  height: 32px;
  line-height: 1.5;
  border-radius: 5px;
  transition: color 0.15s, background-color 0.15s, border-color 0.15s,
    box-shadow 0.15s;
  border: 1px solid rgba(0, 0, 0, 0.103176);

  background-color: ${(p) => `var(--${p.background})`};
  color: ${(p) => p.color};

  ${(p) =>
    p.background === "white"
      ? `border: 1px solid rgb(187, 187, 187);
        box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);`
      : ""}

  &.loading {
    opacity: 0.8;
    filter: brightness(110%);
  }
  &:disabled {
    background-color: var(--light);
    color: #999;
  }

  .fa-loader {
    animation: loading 3s linear infinite;
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .rapid-btn-wrapper {
    display: flex;
    align-items: center;
    &-content {
      transition: all 0.4s;
      &-loading {
        transition: all 0.4s;
        font-size: 16px;
        /* margin-top: -4px; */
        margin-left: 12px;
        .anticon-loading {
          font-size: 18px;
          margin-left: -5px;
        }
      }
    }
    &-icon {
      /* padding-top: 3px; */
      margin-right: -10px;
      opacity: 0;
      transition: all 0.8s;
    }
    &:hover:not(.no-icon) {
      .rapid-btn-wrapper-loading {
        margin-left: 7px;
      }
      .rapid-btn-wrapper-content {
        margin-right: 5px;
      }
      .rapid-btn-wrapper-icon {
        margin-right: 0;
        opacity: 1;
      }
    }
  }
`;
