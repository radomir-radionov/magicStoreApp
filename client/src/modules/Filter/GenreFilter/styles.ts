import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const Form = styled.form`
  margin-bottom: 1.6rem;
`;

export const Title = styled.h3`
  padding-bottom: ${indents.pb_0};
  padding-left: ${indents.pl_1};
  margin-bottom: 1rem;
  color: ${colors.TEXT_1};
  border-bottom: 1px solid ${colors.BG_WHITE};
`;

export const Label = styled.label`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_1};
`;

export const RadioInput = styled.input`
  margin-right: 1rem;
`;
