import { colors } from "styles";
import styled from "styled-components";

export const Spiner = styled.div`
  position: absolute;
  top: 50%;
  border: 16px solid #f3f3f3;
  border-top: 16px solid;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  animation: spin 2s linear infinite;
  background-color: rgba(0, 0, 0, 0.2);
  color: ${colors.BACKGROUND_BLACK};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
