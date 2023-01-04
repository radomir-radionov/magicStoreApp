import styled, { keyframes } from "styled-components";
import { colors, device, typography } from "styles";

const RubberBandAnimation = keyframes`
   from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const AnimatedTitleStyled = styled.h1`
  ${typography.H2}

  @media (max-width: ${device.mobileM}) {
    font-size: 4.8rem;
    line-height: 4.4rem;
  }
`;

export const Br = styled.br``;

export const Box = styled.p`
  display: inline-block;
  padding-right: 2rem;
`;

export const Letter = styled.span`
  display: inline-block;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
    animation-name: ${RubberBandAnimation};
  }
`;
