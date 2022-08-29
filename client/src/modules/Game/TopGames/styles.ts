import styled from "styled-components";
import { typography } from "styles";

export const TopGamesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 90vh;
  margin-bottom: 10rem;
`;

export const Title = styled.h2`
  margin-bottom: 6rem;
  ${typography.H2}
  text-align: center;
`;
