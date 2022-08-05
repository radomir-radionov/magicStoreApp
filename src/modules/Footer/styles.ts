import styled from "styled-components";
import { colors, typography } from "styles";

export const FooterStyled = styled.footer`
  padding: 2rem;
  text-align: end;
  color: ${colors.TEXT_GRAY};
  background-color: ${colors.BACKGROUND_DARK_GRAY};
`;

export const Text = styled.p`
  ${typography.BODY2}
`;
