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
  margin-bottom: 1rem;
  ${typography.H3}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 3rem;
`;
