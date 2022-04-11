import styled from "styled-components";

export const StyledTable = styled.div`
  overflow: scroll;
  table {
    border-spacing: 0;
    tr {
      width: auto;
      th,
      td {
        border: 1px solid;
        padding: 5px 10px;
      }
      th {
        background: var(--green);
      }
    }
  }
`;
