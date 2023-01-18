import styled from "styled-components";

export const ClampedTextStyled = styled.div``;

export const Title = styled.h3`
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 22px;
`;

export const Btn = styled.button`
  padding: 3px 5px;
  font-size: 12px;
  border: 1px solid white;
  border-radius: 3px;
  color: black;
  background-color: white;

  &:hover {
    border: 1px solid hsla(0, 0%, 100%, 0.5);
    background-color: hsla(0, 0%, 100%, 0.5);
  }
`;
