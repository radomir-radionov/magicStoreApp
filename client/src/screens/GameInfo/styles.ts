import styled from "styled-components";
import { colors, device } from "styles";

export const GameInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1;
  min-height: 92vh;
  padding: 5rem;

  @media (max-width: ${device.tablet}) {
    padding: 2rem;
  }

  @media (max-width: ${device.mobileL}) {
    padding: 1rem;
  }
`;

export const Btn = styled.button`
  padding: 1rem;
  border: 1.5px solid ${colors.BG_WHITE};
  border-radius: 7px;
`;

export const Data = styled.section`
  display: flex;
  justify-content: center;
  gap: 5rem;
`;

export const InfoBox = styled.section`
  max-width: 60rem;
  width: 50%;
  transition: all 1s ease-out;

  @media (max-width: ${device.laptop}) {
    width: 100%;
  }

  @media (max-width: ${device.tablet}) {
    width: 100%;
  }
`;

export const MovieBox = styled.section`
  @media (max-width: ${device.laptop}) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Img = styled.img<any>`
  display: ${({ display }) => (display ? display : "static")};
  width: 40rem;
  height: 30rem;
  border-radius: 10px;

  @media (max-width: ${device.laptop}) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;

  @media (max-width: ${device.laptop}) {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const Meta = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const MetaBlock = styled.article<any>`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: ${({ wide }) => (wide ? wide : "45%")};
  margin-bottom: 3rem;
`;

export const MetaTitle = styled.h4`
  font-size: 14px;
`;

export const MetaText = styled.p`
  font-size: 16px;
`;
