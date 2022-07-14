import styled from "styled-components";
import { colors, typography } from "styles";

export const SignInModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  min-height: 300px;
  margin-right: -50%;
  padding: 5rem 7rem;
  border-radius: 16px;
  background-color: ${colors.BACKGROUND_DARK_GRAY};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h3`
  margin-bottom: 3rem;
  ${typography.H3}
  text-align: center;
  color: ${colors.TEXT_1};
`;

export const Form = styled.form`
  button {
    width: 100%;
    margin-top: 32px;
  }
`;
