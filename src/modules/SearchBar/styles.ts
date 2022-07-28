import styled from "styled-components";
import { colors } from "styles";

export const Form = styled.form`
  position: relative;
`;

export const BoxImg = styled.span`
  position: absolute;
  text-align: center;
  top: 16px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img``;

export const Input = styled.input`
  width: 500px;
  padding: 16px 44px;
  outline: none;
  border: none;
  border-radius: 8px;

  ::placeholder {
    color: ${colors.TEXT_BLACK};
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;
