import styled from "styled-components";
import { colors, typography } from "styles";

export const FiltersBarStyled = styled.nav`
  height: fit-content;
  border-radius: 8px;
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
