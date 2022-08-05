import styled from "styled-components";
import { BUTTON_VARIANTS } from "./types";
import { colors } from "styles";

interface IProps {
  $variant: BUTTON_VARIANTS;
}

export const ButtonStyled = styled.button<IProps>`
  position: relative;
  width: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? "18rem" : "12rem"};
  height: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? "5rem" : "4rem"};
  font-size: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.PRIMARY ? undefined : "1.4rem"};
  letter-spacing: 4px;
  color: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.ADMIN
      ? colors.BACKGROUND_ORANGE
      : colors.BACKGROUND_VIVID_CYAN};
  border: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.ADMIN
      ? `1px solid ${colors.BACKGROUND_ORANGE}`
      : `1px solid ${colors.BACKGROUND_VIVID_CYAN}`};
  background: ${({ $variant }: IProps) =>
    $variant === BUTTON_VARIANTS.ADMIN
      ? ` linear-gradient(
        to right,
        ${colors.BACKGROUND_ORANGE} 50%,
        ${colors.BACKGROUND_BODY} 50%
      );`
      : ` linear-gradient(
        to right,
        ${colors.BACKGROUND_VIVID_CYAN} 50%,
        ${colors.BACKGROUND_BODY} 50%
      )`};
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:disabled {
    display: none;
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 3px;
    height: 3px;
    background-color: ${({ $variant }: IProps) =>
      $variant === BUTTON_VARIANTS.ADMIN
        ? colors.BACKGROUND_ORANGE
        : colors.TEXT_VIVID_CYAN};
  }

  &:hover {
    color: ${colors.TEXT_BLACK};
    background-position: left bottom;
  }

  &:hover:after {
    background-color: ${colors.BACKGROUND_WHITE};
  }
`;
