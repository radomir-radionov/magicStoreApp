import styled from "styled-components";
import { colors } from "styles";

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: whitesmoke;
`;

export const ProfileInfoStyled = styled.div`
  width: 59.8rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.05);
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

export const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  color: ${colors.TEXT_BLACK};
`;

export const UserData = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${colors.TEXT_BLACK};
  background-color: red;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const Text = styled.p`
  color: ${colors.TEXT_BLACK};
`;
