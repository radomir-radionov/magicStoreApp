import styled from "styled-components";
import { colors, device, indents } from "styles";

export const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100vh;
  width: 13rem;
  padding: 2rem 0;
  margin: 0;
  background-color: ${colors.BG_DARK_GRAY};
  transition: all 0.18s ease-out;

  @media (max-width: ${device.tablet}) {
    position: initial;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10rem;
    width: 100%;
    padding: 0 3rem;
  }
`;

export const LogoBox = styled.div`
  background-color: ${colors.BG_BLACK};
  cursor: pointer;

  @media (max-width: ${device.tablet}) {
    display: flex;
    gap: 2rem;
  }
`;

export const Logo = styled.img`
  width: 8rem;

  @media (max-width: ${device.tablet}) {
    width: 6rem;
  }
`;

export const Title = styled.h4`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.6rem;
  color: ${colors.TEXT_GRAY};

  @media (max-width: ${device.tablet}) {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  @media (max-width: ${device.tablet}) {
    display: none;
  }
`;
