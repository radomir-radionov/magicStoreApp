import styled from "styled-components";
import { colors } from "styles";

export const GameInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
  min-height: 92vh;
  padding: 5rem;
`;

export const Btn = styled.button`
  padding: 1rem;
  border: 1.5px solid ${colors.BG_WHITE};
  border-radius: 7px;
`;

export const Data = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Header = styled.header``;

export const Title = styled.h1``;

export const Content = styled.div``;

export const Description = styled.p``;
