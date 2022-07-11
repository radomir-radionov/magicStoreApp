import { colors, typography } from "styles";
import styled, { keyframes } from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

const BounceAnimation = keyframes`
  0% { padding-bottom: 0; }
  50% { padding-bottom: 15px }
  100% { padding-bottom: 0 }
`;

export const GreetingsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const GreetingsZone = styled.div``;

export const RegistrationZone = styled.div`
  display: flex;
  gap: 40px;
`;

export const ScrollDownRight = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 10px;
  writing-mode: vertical-lr;
`;

export const ScrollDownLeft = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 10px;
  writing-mode: vertical-lr;
`;

export const TextScrollDown = styled.span`
  font-size: 14px;
  animation: ${BounceAnimation} 1s linear infinite;
`;

export const Icon = styled(AiOutlineArrowDown)`
  margin-top: 8px;
  font-size: 14px;
  color: ${colors.TEXT_GRAY};
`;
