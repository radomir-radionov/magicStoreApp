import styled from "styled-components";
import { colors, typography } from "styles";

export const FiltersBarStyled = styled.nav`
  height: fit-content;
  padding: 2.6rem;
  border-radius: 8px;
  background: ${colors.BOX_SHADOW};
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  ${typography.H2}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 1rem;
`;
