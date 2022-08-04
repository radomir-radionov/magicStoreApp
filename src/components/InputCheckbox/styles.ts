import styled from "styled-components";
import { FieldError } from "react-hook-form";
import { colors, typography } from "styles";

interface ILabelStyled {
  errors?: FieldError | undefined;
  invalid?: boolean;
  isDirty?: boolean;
}

export const InputCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InputCheckboxStyled: any = styled.input``;

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

export const ErrorMessage = styled.small`
  margin-top: 3px;
  color: ${colors.TEXT_RED};
`;
