import styled from "styled-components";
import { colors, typography } from "styles";

export const ButtonStyled = styled.button`
  padding: 1.2rem 3.2rem;
  letter-spacing: 4px;
  ${typography.BUTTON}
  border: 1px solid #0099cc;
  border-radius: 8px;
  color: #0099cc;

  ${({ disabled }) =>
    disabled &&
    `
    border: 1px solid #999999;
    color: #999999;
    cursor: not-allowed;
  `}
`;
