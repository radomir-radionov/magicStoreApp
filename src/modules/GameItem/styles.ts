import { colors, typography } from "styles";
import styled from "styled-components";
import { Button } from "components";

export interface ICardImage {
  img: string;
}

export const Front = styled.div`
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

export const Back = styled.div`
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
  &:hover ${Front} {
    transform: rotateY(180deg);
  }

  &:hover ${Back} {
    transform: rotateY(360deg);
  }
`;

export const Platforms = styled.div`
  position: absolute;
  padding: 5px;
  border-radius: 8px 0 16px 0;
  background-color: ${colors.BOX_SHADOW};
`;

export const Icon = styled.img`
  height: 1.5rem;
  margin-right: 1rem;
`;

export const ImgBox = styled.div<ICardImage>`
  height: 26rem;
  border-radius: 8px 8px 0 0;
  background-image: url(${({ img }) => img});
  background-size: cover;
`;

export const Body = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  ${typography.BODY1}
  color: ${colors.TEXT_1};
`;

export const Price = styled.h3`
  ${typography.BODY1}
  color: ${colors.TEXT_1};
`;

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  height: 23rem;
  margin: 5px 0 8px 0;
  ${typography.BODY2}
  color: ${colors.TEXT_1};
`;

export const Age = styled.p`
  margin-bottom: 1.4rem;
  ${typography.BODY1}
  text-align: center;

  color: ${colors.TEXT_1};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonStyled = styled(Button)`
  width: 14rem;
  height: 4rem;
`;
