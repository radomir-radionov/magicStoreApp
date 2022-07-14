import styled from "styled-components";
import { colors, typography } from "styles";

export const ButtonStyled = styled.button`
  padding: 1rem;
  ${typography.BUTTON}
  background-color: ${colors.MAIN_BLUE};

  &:disabled {
    background-color: red;
  }
`;
