import styled from "styled-components";
import { colors, indents } from "styles";

export const SettingsStyled = styled.div`
  padding: ${indents.p_2};
  border: 1px solid ${colors.BORDER_GRAY};
  border-radius: 20px;
  background-color: ${colors.BACKGROUND_WHITESMOKE};
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${colors.BORDER_GRAY};
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  color: ${colors.TEXT_BLACK};
`;

export const ModalWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
