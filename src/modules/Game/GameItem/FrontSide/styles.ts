import styled from "styled-components";
import { colors, typography } from "styles";

export interface ICardImage {
  img: string;
}

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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Test = styled.div`
  svg {
    width: 3rem;
    height: 3rem;
    color: ${colors.TEXT_YELLOWGREEN};
  }
`;
