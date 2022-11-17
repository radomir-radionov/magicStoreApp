import styled from "styled-components";
import { colors } from "styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 6.8rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-basis: 400px;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  background-color: white;
`;

export const Img = styled.img``;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;

  ::placeholder {
    color: ${colors.TEXT_BLACK};
  }

  /* @media (max-width: 768px) {
    width: 280px;
  } */
`;
