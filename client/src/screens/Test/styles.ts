import styled from "styled-components";
import { colors } from "styles";

export const TestStyled = styled.div`
  display: flex;
  flex: 1;
  gap: 8rem;
  width: 100%;
  padding: 5rem;

  .card {
    color: white;
    float: left;
    width: calc(25% - 20px);
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    height: 200px;
    background-color: red;
  }
  .card p {
    font-size: 18px;
  }

  .cardContainer {
    width: 80%;
  }

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
`;
