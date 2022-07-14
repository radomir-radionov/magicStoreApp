import styled from "styled-components";
import { colors, typography } from "styles";

interface IProps {
  disabled: boolean;
  maxLength?: string | number;
  ref?: any;
}

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1.2rem;
`;

export const LabelStyled = styled.label`
  ${typography.H4};
  color: ${colors.TEXT_BLACK};
`;

export const InputStyled: any = styled.input`
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
`;

export const ErrorMessage = styled.small`
  margin-top: 3px;
  color: ${colors.TEXT_RED};
`;
