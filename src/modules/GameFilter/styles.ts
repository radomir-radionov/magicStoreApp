import styled from "styled-components";
import { colors, typography } from "styles";

interface ITitleProps {
  textAlign: string;
}

export const GameFilterStyled = styled.div`
  display: flex;
  gap: 10rem;
  width: 100%;
`;

export const FilteredGames = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.6rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const Title = styled.h2<ITitleProps>`
  padding-left: ${(props) => (props.textAlign === "center" ? "0" : "24px")};
  margin-bottom: 1rem;
  text-align: ${(props) => (props.textAlign === "center" ? "center" : "left")};
  ${typography.H2}
  color: ${colors.TEXT_1};
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 8rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem 8rem;
  margin-top: 5rem;
`;
