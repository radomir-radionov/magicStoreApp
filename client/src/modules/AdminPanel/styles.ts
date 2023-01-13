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

export const FeaturesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 6rem;
`;

export const ButtonStyled = styled<any>(Button)`
  height: 5rem;
  width: 14rem;
  font-size: 1.8rem;
  border-radius: 3px;
`;
