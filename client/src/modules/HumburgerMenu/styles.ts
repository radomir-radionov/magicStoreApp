import styled from "styled-components";
import { colors, device } from "styles";

interface ComponentClickedProps {
  clicked: boolean;
}

export const MenuLabel = styled.label`
  @media (max-width: 805px) {
    z-index: 10;
    cursor: pointer;
  }
`;

export const Icon = styled.span<ComponentClickedProps>`
  @media (max-width: 805px) {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 2px;
    margin-top: 16px;
    background-color: ${({ clicked }) => (clicked ? "transparent" : "white")};
    transition: all 0.3s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      display: inline-block;
      width: 3.5rem;
      height: 2px;
      background-color: white;
      transition: all 0.3s;
    }
    &::before {
      top: ${({ clicked }) => (clicked ? "0" : "-10px")};
      transform: ${({ clicked }) => (clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${({ clicked }) => (clicked ? "0" : "10px")};
      transform: ${({ clicked }) =>
        clicked ? "rotate(-135deg)" : "rotate(0)"};
    }
  }
`;

export const HumburgerMenuStyled = styled.div`
  display: none;

  @media (max-width: ${device.tabletM}) {
    display: initial;
  }
`;

export const Wrapper = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  @media (max-width: ${device.tabletM}) {
    position: absolute;
    top: 10rem;
    right: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: ${({ clicked }) => (clicked ? "100%" : "0")};
    opacity: ${({ clicked }) => (clicked ? "1" : "0")};
    border-top: 2px solid ${colors.BORDER_GRAY};
    background-color: #181818;
  }
`;
