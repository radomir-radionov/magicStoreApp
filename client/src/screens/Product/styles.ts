import styled from "styled-components";
import { colors, typography } from "styles";

export const ProductStyled = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8rem;
  width: 100%;
  padding: 5rem;
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
  padding: 1rem;
  margin-bottom: 4rem;
  text-align: center;
  ${typography.H3}
  color: ${colors.TEXT_1};
  border-bottom: 1px solid ${colors.TEXT_WHITE};
`;

export const SpanStyled = styled.span`
  margin-top: 2rem;
  min-width: 4rem;
  padding: 0 0.6rem;
  text-align: center;
  border-radius: 30%;
  background-color: ${colors.BACKGROUND_RED};
`;
