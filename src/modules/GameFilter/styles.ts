import styled from "styled-components";
import { colors, typography } from "styles";

export const GameFilterStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  width: 100%;
  padding: 0 5rem 5rem 5rem;
`;

export const SectionSearchBar = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;
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

export const Title = styled.h2`
  padding-left: 2.4rem;
  ${typography.H2}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 7rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem 8rem;
  margin-top: 5rem;
`;

export const WrapperFilteredGames = styled.div`
  display: flex;
  gap: 7rem;
  width: 100%;
`;
