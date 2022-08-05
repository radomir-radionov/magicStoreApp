import { Button } from "components";
import styled from "styled-components";
import { colors } from "styles";

export const AdminPageStyled = styled.div`
  flex: 1;
  padding: 10rem;
`;

export const AdminControlPanel = styled.div``;

export const ButtonStyled = styled(Button)`
  color: ${colors.TEXT_ORANGE};
  border: 1px solid ${colors.BACKGROUND_ORANGE};
  background: linear-gradient(
    to right,
    ${colors.BACKGROUND_ORANGE} 50%,
    ${colors.BACKGROUND_BODY} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.3s ease-out;

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    width: 3px;
    height: 3px;
    background: ${colors.BACKGROUND_ORANGE};
  }
`;
