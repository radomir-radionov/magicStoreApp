import styled from "styled-components";
import { ChangeEvent, ChangeEventHandler } from "react";
import { FieldError } from "react-hook-form";
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
  invalid?: boolean;
  isDirty?: boolean;
  errors?: FieldError | undefined;
}

interface ILabelStyled {
  errors: FieldError | undefined;
  invalid: boolean;
  isDirty: boolean;
}

export const TextareaWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const LabelStyled = styled.label<ILabelStyled>`
  display: block;
  ${typography.BODY2}
  color: ${colors.TEXT_BLACK};

  ${({ errors }) =>
    errors &&
    `
    color: ${colors.TEXT_RED} !important; 
  `}

  ${({ invalid, isDirty, errors }) =>
    !invalid &&
    isDirty &&
    !errors &&
    `
    color: ${colors.TEXT_BLACK} !important;
  `}
`;

export const TextareaStyled = styled.textarea<ITextareaStyledProps>`
  width: 100%;
  height: 12rem;
  padding: 6px;
  border: 1px solid;
  border-radius: 8px;
  color: black;
  resize: none;

  &:focus {
    border: 1px solid ${colors.BORDER_BLUE};
  }

  &:focus + ${LabelStyled} {
    color: ${colors.MAIN_BLUE};
  }

  ${({ errors }) =>
    errors &&
    `
    border: 1px solid ${colors.TEXT_RED} !important; 
  `}

  ${({ invalid, isDirty, errors }) =>
    !invalid &&
    isDirty &&
    !errors &&
    `
    border: 1px solid ${colors.TEXT_GREEN} !important;   
  `}
`;

export const ErrorMessage = styled.small`
  margin-top: 3px;
  color: ${colors.TEXT_RED};
`;
