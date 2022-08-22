import { colors, indents, typography } from "styles";
import styled from "styled-components";

export const ProductPageStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
  padding: 5rem;
`;

export const Title = styled.h2`
  padding-bottom: ${indents.pb_0};
  ${typography.H2}
  border-bottom: 1px solid ${colors.BACKGROUND_WHITESMOKE};
  color: ${colors.TEXT_VIVID_CYAN};
`;
