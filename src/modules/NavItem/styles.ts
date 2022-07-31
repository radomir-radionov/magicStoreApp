import styled from "styled-components";
import { colors } from "styles";

export const NavItemStyled = styled.li`
  border-bottom: 1px solid ${colors.BORDER_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
    transition: color 0.3s;
  }
`;
