import { ChangeEvent, ChangeEventHandler } from "react";
import styled from "styled-components";
import { colors, typography } from "styles";

interface ITextareaStyledProps {
  id: string;
  name: string;
  placeholder: string;
  ref?: any;
  onChange?:
    | (ChangeEventHandler<HTMLTextAreaElement> &
        ((event: ChangeEvent<HTMLInputElement>) => void))
    | undefined;
}

export const TextareaWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_BLACK};
`;

export const TextareaStyled = styled.textarea<ITextareaStyledProps>`
  width: 100%;
  height: 12rem;
  padding: 6px;
  border: 1px solid;
  border-radius: 8px;
  color: black;
  resize: none;
`;
