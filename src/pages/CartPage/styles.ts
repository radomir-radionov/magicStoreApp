import { colors } from "styles";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

export const CartPageStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
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
  background-color: ${colors.TEXT_RED};
`;
