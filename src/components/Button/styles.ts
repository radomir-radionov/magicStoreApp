import styled from "styled-components";
import { colors } from "styles";
import { BUTTON_VARIANTS } from "./types";

interface IProps {
  $variant: BUTTON_VARIANTS;
}

export const ButtonStyled = styled.button<IProps>`
  position: relative;
  width: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? "18rem" : "12rem"};
  height: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? "5rem" : "3rem"};
  font-size: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? undefined : "1.4rem"};
  letter-spacing: 4px;
  color: ${colors.TEXT_VIVID_CYAN};
  border: 1px solid ${colors.TEXT_VIVID_CYAN};
  background: linear-gradient(
    to right,
    ${colors.BACKGROUND_VIVID_CYAN} 50%,
    ${colors.BACKGROUND_BODY} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 3px;
    height: 3px;
    background: ${colors.TEXT_VIVID_CYAN};
  }

  &:hover {
    color: ${colors.TEXT_BLACK};
    background-position: left bottom;
  }

  &:hover:after {
    background: ${colors.BACKGROUND_WHITE};
  }
`;
