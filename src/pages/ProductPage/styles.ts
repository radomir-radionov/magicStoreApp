import { colors } from "styles";
import styled from "styled-components";

export const ProductPageStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
  padding-top: 3rem;
`;

export const Title = styled.h1`
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${colors.BACKGROUND_WHITESMOKE};
  color: ${colors.TEXT_VIVID_CYAN};
`;
