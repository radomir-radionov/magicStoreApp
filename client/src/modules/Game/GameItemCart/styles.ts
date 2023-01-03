import { colors, typography } from "styles";
import styled from "styled-components";
import { Button } from "components";

export const GameItemCartStyled = styled.article`
  display: flex;
  gap: 3rem;
  width: fit-content;
  height: 30rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${colors.BACKGROUND_VIVID_CYAN};
`;

export const ImgBox = styled.div`
  width: 20rem;
  height: 24rem;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const GameDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 27rem;
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

export const ButtonStyled = styled(Button)``;

export const InteractPanel = styled.div``;
