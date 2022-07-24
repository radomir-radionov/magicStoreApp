import styled from "styled-components";
import { colors } from "styles";

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  padding-left: 2.4rem;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  color: ${colors.TEXT_1};
`;

export const Criteries = styled.div`
  display: flex;
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

export const Hr = styled.hr`
  margin-bottom: 1rem;
`;
