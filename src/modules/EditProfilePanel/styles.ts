import styled from "styled-components";
import { colors } from "styles";

export const EditProfilePanelStyled = styled.div``;

export const PersonalInfo = styled.section`
  padding: 2rem;
  border: 1px solid ${colors.BORDER_GRAY};
  border-radius: 20px;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${colors.BORDER_GRAY};
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  color: ${colors.TEXT_BLACK};
`;

export const UserData = styled.div`
  display: flex;
  gap: 3rem;
`;
