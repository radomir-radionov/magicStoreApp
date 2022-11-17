import styled from "styled-components";
import { colors, indents, typography } from "styles";

export interface ICardImage {
  img: string;
}

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 1rem;
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
  background-color: ${colors.BOX_SHADOW_DARK};
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
  padding: 0 1rem;
`;

export const IconWrapper = styled.div`
  svg {
    width: 3rem;
    height: 3rem;
    color: ${colors.TEXT_YELLOWGREEN};
  }
`;
