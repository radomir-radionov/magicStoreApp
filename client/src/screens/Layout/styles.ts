import styled from "styled-components";
import { colors } from "styles";

export const LayoutPageStyled = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Wrapper = styled.header`
  display: none;
  height: 6vh;
  padding: 0 2rem;
  background-color: ${colors.BACKGROUND_BLACK};
  border-bottom: 1px solid ${colors.BORDER_GRAY};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${colors.TEXT_GRAY};
`;
