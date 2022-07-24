import styled from "styled-components";
import { colors, typography } from "styles";

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const Title = styled.h3`
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_1};
`;

export const RadioInput = styled.input`
  margin-right: 1rem;
`;
