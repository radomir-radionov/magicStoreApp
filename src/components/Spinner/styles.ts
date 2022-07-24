import styled from "styled-components";

export const Spiner = styled.div`
  position: absolute;
  top: 170px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  background-color: rgba(0, 0, 0, 0.2);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
