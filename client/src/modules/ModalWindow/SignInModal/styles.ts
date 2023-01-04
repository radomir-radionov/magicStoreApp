import styled from "styled-components";
import { colors, device, indents, typography } from "styles";

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  padding: ${indents.p_1};
  border-radius: 16px;
  background-color: ${colors.BG_WHITE};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h3`
  margin-bottom: 3rem;
  ${typography.H3}
  text-align: center;
  color: ${colors.TEXT_BLACK};
`;

export const Form = styled.form`
  @media (max-width: ${device.tablet}) {
    text-align: center;
  }
`;

export const InteractionPanel = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const LoginInfo = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 2rem;
  color: ${colors.BLACK};
`;

export const Button = styled.button`
  color: ${colors.TEXT_BLUE};
`;
