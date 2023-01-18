import styled from "styled-components";
import { colors } from "styles";

export const SelectStyled = styled.select<any>`
  width: 14rem;
  padding: 4px;
  outline: 1px solid ${colors.TEXT_1};
  color: ${colors.TEXT_1};
  background: transparent;
  cursor: pointer;
`;

export const Option = styled.option`
  font-size: 1.5rem;
  background: #313146;
  &:hover {
    background-color: yellow;
  }
`;
