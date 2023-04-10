import { BsFilterCircle } from "react-icons/bs";
import styled from "styled-components";
import { colors, device } from "styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const FiltersBarStyled = styled.nav<any>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: ${device.laptopM}) {
    max-width: 60rem;
  }

  @media (max-width: ${device.laptop}) {
    display: ${({ isBarShown }) => (isBarShown ? "flex" : "none")};
  }
`;

export const Btn = styled.button`
  display: none;

  @media (max-width: ${device.laptop}) {
    display: initial;
  }
`;

export const IconStyled = styled(BsFilterCircle)`
  width: 25px;
  height: 25px;
  color: white;
  transition: color 0.5s;

  &:hover {
    color: ${colors.YELLOW};
  }
`;
