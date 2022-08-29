import styled from "styled-components";
import { colors, typography } from "styles";

export const GameFilterStyled = styled.section`
  display: flex;
  gap: 10rem;
  width: 100%;
`;

export const FilteredGames = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const Title = styled.h3`
  text-align: center;
  ${typography.H3}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 7rem;
`;

export const SpanStyled = styled.span`
  margin-top: 2rem;
  min-width: 4rem;
  padding: 0 0.6rem;
  text-align: center;
  border-radius: 30%;
  background-color: ${colors.BACKGROUND_RED};
`;
