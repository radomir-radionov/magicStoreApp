import styled from "styled-components";

interface IGameListStyledProps {
  display: number;
}

export const GameListStyled = styled.div`
  display: ${({ display }: IGameListStyledProps) =>
    display ? "flex" : "none"};
  justify-content: center;
  gap: 6rem;
  flex-wrap: wrap;
  width: 100%;
`;
