import styled from "styled-components";

export const StyledBadge = styled.span`
  background-color: ${(p) => `var(--${p.background})`};
  color: ${(p) => p.color};
  padding: 2px 10px;
  border-radius: 15px;
`;
