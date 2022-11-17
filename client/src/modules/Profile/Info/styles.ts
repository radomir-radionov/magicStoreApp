import styled from "styled-components";
import { colors, indents, typography } from "styles";

export const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid ${colors.COLOR_WHITE};
`;

export const InfoStyled = styled.div`
  width: 59.8rem;
  padding: ${indents.p_2};
`;

export const PersonalInfo = styled.section`
  padding: ${indents.p_2};
  border-radius: 20px;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${colors.COLOR_WHITE};
`;

export const Title = styled.h3`
  margin-bottom: 1rem;
  ${typography.H3}
  text-align: center;
`;

export const UserData = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 22rem;
  height: 22rem;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const Text = styled.p``;
