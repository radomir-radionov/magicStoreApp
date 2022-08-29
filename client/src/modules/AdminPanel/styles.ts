import { Button } from "components";
import styled from "styled-components";
import { typography } from "styles";

export const AdminPanelStyled = styled.div``;

export const Title = styled.h3`
  ${typography.H3}
  margin-bottom: 2rem;
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const AdminControlPanel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
`;

export const ButtonStyled = styled(Button)`
  width: 16rem;
  height: 5rem;
  font-size: 1.8rem;
`;
