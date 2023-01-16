import styled from "styled-components";
import { colors } from "styles";

export const TestStyled = styled.div`
  display: flex;
  flex: 1;
  gap: 8rem;
  width: 100%;
  padding: 5rem;

  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
`;

export const SocialItem = styled.li``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Link = styled.a`
  margin-right: 1rem;
  color: ${colors.TEXT_GRAY};

  &:hover {
    color: ${colors.TEXT_VIVID_CYAN};
  }
`;

export const CardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`;
