import styled from "styled-components";

interface ComponentClickedProps {
  clicked: boolean;
}

export const MenuLabel = styled.label<any>`
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
    background-color: ${(props) => (props.clicked ? "transparent" : "white")};
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
      top: ${(props) => (props.clicked ? "0" : "-10px")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
    &::after {
      top: ${(props) => (props.clicked ? "0" : "10px")};
      transform: ${(props) =>
        props.clicked ? "rotate(-135deg)" : "rotate(0)"};
    }
  }
`;

export const HumburgerMenuStyled = styled.div<any>``;

export const Wrapper = styled.div<any>`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    top: 7rem;
    right: 0;
    z-index: 6;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};
    background-color: #181818;
  }
`;
