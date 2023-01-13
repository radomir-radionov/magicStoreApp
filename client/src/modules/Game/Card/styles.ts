import { colors, device } from "styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled.article`
  color: white;
  float: left;
  width: calc(25% - 20px);
  height: 20%;
  margin: 1rem;
  border-radius: 15px;
  background-color: #262634;
  box-shadow: 0 10px 26px #262634;

  .cardContainer {
    width: 80%;
  }

  @media screen and (max-width: ${device.laptopL}) {
    width: 30%;
    height: 16%;
  }

  @media screen and (max-width: ${device.laptop}) {
    width: 30rem;
    height: 12%;
  }

  @media screen and (max-width: ${device.tablet}) {
    width: 90%;
    height: 7%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 1.2rem;
`;

export const Meta = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Platforms = styled.div``;

export const Score = styled.div`
  padding: 3px 8px;
  font-size: 1.4rem;
  font-weight: 700;
  border: 1px solid ${colors.BG_WHITE};
  border-radius: 5px;
`;

export const Released = styled.p`
  font-size: 1.5rem;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 2.4rem;
  font-weight: 700;
  transition: all 0.2s ease-out;
`;
