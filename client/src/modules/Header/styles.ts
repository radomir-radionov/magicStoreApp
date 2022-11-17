import styled from "styled-components";
import { colors, indents } from "styles";

export const HeaderStyled = styled.header`
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoIcon = styled.div`
  padding: ${indents.p_2};
  background-color: ${colors.BACKGROUND_BLACK};
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 8rem;
`;

export const Title = styled.h4`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.6rem;
  color: ${colors.TEXT_GRAY};
`;

export const Social = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const SocialItem = styled.li``;

export const Link = styled.a`
  margin-right: 1rem;
  color: ${colors.TEXT_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
  }
`;
