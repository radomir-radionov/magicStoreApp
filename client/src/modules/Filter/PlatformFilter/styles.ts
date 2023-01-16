import styled from "styled-components";
import { colors } from "styles";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: block;
  color: ${colors.TEXT_1};
`;

export const Select = styled.select`
  margin-left: 2.6rem;
  outline: 1px solid ${colors.TEXT_1};
  color: ${colors.TEXT_1};
  background: transparent;
  cursor: pointer;
`;

export const Option = styled.option`
  padding: 10px;
  color: ${colors.TEXT_BLACK};
  background: transparent;
`;
