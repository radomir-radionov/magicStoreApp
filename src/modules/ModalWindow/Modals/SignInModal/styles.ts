import styled from "styled-components";
import { colors, typography } from "styles";

export const SignInModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  min-height: 300px;
  margin-right: -50%;
  padding: 4rem 6rem;
  border-radius: 16px;
  background-color: ${colors.BACKGROUND_WHITE};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h3`
  margin-bottom: 3rem;
  ${typography.H3}
  text-align: center;
  color: ${colors.TEXT_BLACK};
`;

export const Form = styled.form`
  width: 300px;
`;

export const InteractionPanel = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 2rem;
`;
