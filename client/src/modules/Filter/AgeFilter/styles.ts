import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const Form = styled.form``;

export const Title = styled.h4`
  margin-bottom: 1rem;
  padding-bottom: ${indents.pb_0};
  padding-left: ${indents.pl_1};
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
