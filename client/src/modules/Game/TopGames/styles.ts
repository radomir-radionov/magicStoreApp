import styled from "styled-components";
import { typography } from "styles";

export const TopGamesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
`;

export const Title = styled.h2`
  margin-bottom: 6rem;
  ${typography.H2}
  text-align: center;
`;
