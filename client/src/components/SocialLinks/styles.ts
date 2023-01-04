import styled from "styled-components";
import { colors, device } from "styles";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
`;

export const LinkItem = styled.li``;

export const Link = styled.a`
  margin-right: 1rem;
  color: ${colors.TEXT_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
  }

  svg {
    @media (max-width: ${device.tablet}) {
      width: 2.6rem;
      height: 2.6rem;
    }

    @media (min-width: ${device.tablet}) {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;
