import styled from "styled-components";
import { colors, device, typography } from "styles";

export const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
  min-height: 92vh;

  @media screen and (max-width: ${device.tablet}) {
    padding: 1rem;
  }
`;

export const Header = styled.header``;

export const Title = styled.h2`
  ${typography.H2}
`;

export const SpanStyled = styled.span`
  margin-top: 2rem;
  min-width: 4rem;
  padding: 0 0.6rem;
  text-align: center;
  border-radius: 30%;
  background-color: ${colors.BG_RED};
`;

export const CardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
`;
