import { colors, device } from "styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled.article<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 26vw;
  height: 26vh;
  max-width: 46rem;
  max-height: 25vh;
  border-radius: 15px;
  background-color: #262634;
  background: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  box-shadow: 0 10px 26px #262634;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptop}) {
    width: 58%;
  }

  @media (max-width: ${device.tabletM}) {
    width: 75%;
    min-height: 30rem;
  }

  @media (max-width: ${device.mobileL}) {
    width: 100%;
  }
`;

export const Meta = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 12rem;
  padding: 10px;
  border-radius: 0 0 15px 15px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Snippet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Platforms = styled.div``;

export const Score = styled.div`
  padding: 3px 8px;
  font-size: 2rem;
  font-weight: 700;
  border: 1px solid ${colors.BG_WHITE};
  border-radius: 5px;
`;

export const Price = styled.p`
  font-size: 2rem;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 2.2rem;
  font-weight: 700;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptop}) {
    font-size: 3rem;
  }
`;

export const PurchaseAction = styled.div``;

export const Btn = styled.button`
  width: 9.4rem;
  height: 3rem;
  font-size: 1.5rem;
  border: 1px solid white;

  &:hover {
    color: #08fdd8;
    border: 1px solid #08fdd8;
    transition: color 1s;
  }
`;
