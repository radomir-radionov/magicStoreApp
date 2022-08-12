import { colors } from "styles";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

export const CartPageStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  padding: 5rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid ${colors.COLOR_RED};
`;

export const HeaderTable = styled.div`
  display: flex;
`;

export const CartIcon = styled(BsCart)`
  width: 25px;
`;

export const SpanStyled = styled.span`
  min-width: 4rem;
  padding: 0 0.6rem;
  text-align: center;
  border-radius: 30%;
  background-color: ${colors.BACKGROUND_RED};
`;

export const GameListWrapper = styled.div`
  min-height: 40rem;
`;
