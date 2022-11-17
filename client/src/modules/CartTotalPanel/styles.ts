import { Button } from "components";
import { colors } from "styles";
import styled from "styled-components";

export const CartTotalPanelStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-top: 3rem;
  border-top: 2px solid ${colors.BACKGROUND_RED};
`;

export const Text = styled.p``;

export const ButtonStyled = styled(Button)`
  width: 14rem;
  height: 4rem;
  font-size: 2rem;

  &:disabled {
    display: block;
    border: 1px solid #282828;
    color: #282828;
    cursor: not-allowed;
  }
`;
