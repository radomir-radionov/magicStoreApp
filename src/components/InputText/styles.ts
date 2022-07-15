import { configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";
import { FieldError } from "react-hook-form";
import { colors, typography } from "styles";
import { VscCheck } from "react-icons/vsc";

interface ILabelStyled {
  errors: FieldError | undefined;
  invalid: boolean;
  isDirty: boolean;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1.2rem;
`;

export const LabelStyled = styled.label<ILabelStyled>`
  ${typography.H4};
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

export const InputStyled: any = styled.input<{
  errors: FieldError;
  validData: boolean;
  invalid: boolean;
  isDirty: boolean;
}>`
  width: 300px;
  padding: 1.2rem 2.4rem;
  margin-top: 0.6rem;
  border: 1px solid;
  border-radius: 8px;

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
