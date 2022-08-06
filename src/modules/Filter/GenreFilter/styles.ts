import styled from "styled-components";
import { colors, typography } from "styles";

export const Form = styled.form`
  margin-bottom: 1.6rem;
`;

export const Title = styled.h3`
  padding-bottom: 1.6rem;
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  color: ${colors.TEXT_1};
  border-bottom: 1px solid ${colors.BACKGROUND_WHITE};
`;

export const Label = styled.label`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_1};
`;

export const RadioInput = styled.input`
  margin-right: 1rem;
`;
