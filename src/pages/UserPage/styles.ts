import { colors } from "styles";
import styled from "styled-components";

export const UserPageStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.BACKGROUND_WHITESMOKE};
`;

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

export const Form = styled.form``;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  cursor: pointer;
`;
