import styled from "styled-components";
import { colors, typography } from "styles";

export const FiltersBarStyled = styled.nav`
  height: fit-content;
  padding: 0 2.6rem 2.6rem 2.6rem;
  border-radius: 8px;
  background-color: ${colors.BACKGROUND_DARK_GRAY};
`;

export const Title = styled.h2`
  padding-left: 2.4rem;
  margin-bottom: 1rem;
  ${typography.H2}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 3rem;
`;
