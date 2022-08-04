import styled from "styled-components";
import { colors } from "styles";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid white;
`;

export const Title = styled.h3`
  padding-left: 2.4rem;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  color: ${colors.TEXT_1};
`;

export const Label = styled.label`
  display: block;
  color: ${colors.TEXT_1};
`;

export const Select = styled.select`
  width: 13rem;
  margin-left: 2.6rem;
  outline: 1px solid ${colors.TEXT_1};
  color: ${colors.TEXT_1};
  background: transparent;
  cursor: pointer;
`;

export const Option = styled.option`
  color: ${colors.TEXT_BLACK};
  background: transparent;
`;
