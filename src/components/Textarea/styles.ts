import styled from "styled-components";
import { colors, typography } from "styles";

export const TextareaWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_BLACK};
`;

export const TextareaStyled: any = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: 6px;
  border: 1px solid;
  border-radius: 8px;
  color: black;
  resize: none;
`;
