import styled from "styled-components";
import { colors, device, indents, typography } from "styles";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: ${indents.p_2};
  text-align: end;
  color: ${colors.TEXT_GRAY};
  background-color: ${colors.BG_DARK_GRAY};

  @media (min-width: ${device.tablet}) {
    justify-content: right;
  }
`;

export const SocialLinksBox = styled.section`
  display: flex;
  align-items: center;

  @media (min-width: ${device.tablet}) {
    display: none;
  }
`;

export const Text = styled.p`
  ${typography.BODY2}
`;
