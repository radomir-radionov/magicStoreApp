import { colors, indents } from "styles";
import styled from "styled-components";

export interface ICardImage {
  img: string;
}

export const FrontSideWrapper = styled.div`
  width: 23rem;
  height: 38rem;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: ${colors.BG_BLACK};
  box-shadow: 0 5px 16px #b3fcf1;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const BackSideWrapper = styled.div`
  width: 23rem;
  height: 38rem;
  padding: ${indents.p_2};
  border-radius: 8px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: ${colors.BG_BLACK};
  transform: rotateY(180deg);

  box-shadow: 0 5px 10px #b3fcf1;
`;

export const GameItemStyled = styled.article`
  position: relative;
  perspective: 50rem;

  &:hover ${FrontSideWrapper} {
    transform: rotateY(180deg);
  }

  &:hover ${BackSideWrapper} {
    transform: rotateY(360deg);
  }
`;
