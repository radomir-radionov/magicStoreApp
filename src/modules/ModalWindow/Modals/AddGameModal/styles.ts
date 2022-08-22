import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const AddGameModalStyled = styled.div`
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

export const InteractionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const InputCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
