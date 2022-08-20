import { colors } from "styles";
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
  background-color: ${colors.BACKGROUND_BLACK};
  box-shadow: 0px 5px 10px 0px ${colors.BOX_SHADOW};

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const BackSideWrapper = styled.div`
  width: 23rem;
  height: 38rem;
  padding: 1rem;
  border-radius: 8px;
  transition: 1s;
  backface-visibility: hidden;
  background-color: ${colors.BACKGROUND_BLACK};
  transform: rotateY(180deg);
  box-shadow: 0px 5px 10px 0px ${colors.BOX_SHADOW};
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
