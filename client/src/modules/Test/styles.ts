import styled from "styled-components";
import { colors } from "styles";

export const Container = styled.ul`
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
