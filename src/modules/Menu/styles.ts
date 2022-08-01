import styled from "styled-components";
import { colors, typography } from "styles";

export const MenuStyled = styled.menu`
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 13rem;
  height: 100vh;
  padding: 0;
  margin: 0;
  background-color: ${colors.BACKGROUND_DARK_GRAY};
`;

export const LogoBox = styled.div`
  padding: 2rem;
  background-color: ${colors.BACKGROUND_BLACK};
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const Title = styled.h3`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  ${typography.H3};
  color: ${colors.TEXT_GRAY};
`;

export const Socials = styled.div``;

export const Link = styled.a``;
