import styled from "styled-components";
import { device } from "styles";

export const FiltersBarStyled = styled.nav`
  height: fit-content;
  border-radius: 8px;

  @media (max-width: ${device.tablet}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
`;
