import styled from "styled-components";
import { device, typography } from "styles";

export const TopGamesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  margin-bottom: 10rem;
`;

export const Title = styled.h2`
  margin-bottom: 6rem;
  ${typography.H3}
  text-align: center;

  @media (max-width: ${device.mobileM}) {
    font-size: 3.8rem;
    line-height: 3rem;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
`;
