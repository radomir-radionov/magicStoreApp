import { typography } from "styles";
import styled from "styled-components";
import { Button } from "components";

export const GameItemCartStyled = styled.article`
  display: flex;
  gap: 3rem;
  width: fit-content;
  padding: 2rem 0;
  border-bottom: 1px solid white;
`;

export const GameImgBox = styled.div`
  width: 20rem;
  height: 23rem;
`;

export const GameImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 34rem;
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  ${typography.H3}
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  ${typography.BODY3}
`;

export const InputStyled = styled.input`
  margin: 0;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 3rem;
`;
