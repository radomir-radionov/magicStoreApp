import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const SignUpModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  min-height: 300px;
  margin-right: -50%;
  padding: ${indents.p_1};
  border-radius: 16px;
  background-color: ${colors.BACKGROUND_WHITE};
  transform: translate(-50%, -50%);
`;

export const Title = styled.h3`
  margin-bottom: 3rem;
  ${typography.H3}
  text-align: center;
  color: ${colors.TEXT_BLACK};
`;

export const Form = styled.form`
  width: 300px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
