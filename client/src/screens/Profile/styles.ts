import { colors } from "styles";
import styled from "styled-components";

export const ProfileStyled = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 6rem 3rem 3rem;
  background-color: ${colors.BG_BODY};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
