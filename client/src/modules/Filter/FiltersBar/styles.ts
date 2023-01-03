import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const FiltersBarStyled = styled.nav`
  height: fit-content;
  border-radius: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h3`
  padding-left: ${indents.pl_1};
  padding-bottom: 1rem;
  margin-bottom: 4rem;
  border-bottom: 1px solid white;
  ${typography.H3}
  color: ${colors.TEXT_1};
`;
