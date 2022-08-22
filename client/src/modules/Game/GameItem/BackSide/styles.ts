import { Button } from "components";
import styled from "styled-components";
import { colors, typography } from "styles";

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  height: 23rem;
  margin: 5px 0 8px 0;
  ${typography.BODY2}
  color: ${colors.TEXT_1};
`;

export const Age = styled.p`
  margin-bottom: 1.4rem;
  ${typography.BODY1}
  text-align: center;

  color: ${colors.TEXT_1};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonStyled = styled(Button)`
  width: 14rem !important;
  height: 4rem !important;
`;
