import styled from "styled-components";
import { colors } from "styles";

export const HomeStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: none;
  height: 6vh;
  padding: 0 2rem;
  background-color: #181818;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${colors.TEXT_GRAY};
`;
