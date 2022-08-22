import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const FooterStyled = styled.footer`
  padding: ${indents.p_2};
  text-align: end;
  color: ${colors.TEXT_GRAY};
  background-color: ${colors.BACKGROUND_DARK_GRAY};
`;

export const Text = styled.p`
  ${typography.BODY2}
`;
