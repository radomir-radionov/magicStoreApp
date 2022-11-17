import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 2rem;
  border-right: 1px solid black;

  @media (max-width: 768px) {
    border-right: 0;
  }
`;

export const Img = styled.img`
  width: 22rem;
  height: 22rem;
  margin-bottom: 3.3rem;
  border-radius: 10px;
  color: black;
`;

export const Form = styled.form`
  text-align: center;
`;

export const LabelWrapper = styled.p``;

export const Label = styled.label`
  display: inline-block;
  width: 15rem;
  margin-bottom: 2rem;
  padding: 1.2rem 1rem;
  letter-spacing: 4px;
  text-align: center;
  font-size: 2rem;
  line-height: 2rem;
  border: 1px solid #0099cc;
  border-radius: 8px;
  color: #0099cc;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;
