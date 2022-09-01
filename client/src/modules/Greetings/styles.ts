import { colors } from "styles";
import styled, { keyframes } from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";

const BounceAnimation = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-16px); }
  100% { transform: translateY(0); }
`;

export const GreetingsStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  height: 100vh;
  padding: 0 6rem 6rem 6rem;

  @media (max-width: 768px) {
    height: 95vh;
  }
`;

export const ScrollDownRight = styled.div`
  position: absolute;
  display: flex;
  bottom: 1rem;
  right: 10px;
  writing-mode: vertical-lr;
`;

export const ScrollDownLeft = styled.div`
  position: absolute;
  display: flex;
  bottom: 1rem;
  left: 10px;
  writing-mode: vertical-lr;
`;

export const TextScrollDown = styled.span`
  font-size: 14px;
  animation: ${BounceAnimation} 1.5s linear infinite;
`;

export const Icon = styled(AiOutlineArrowDown)`
  margin-top: 8px;
  font-size: 14px;
  color: ${colors.TEXT_GRAY};
`;
