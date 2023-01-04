import styled from "styled-components";
import { device } from "styles";

export const Form = styled.form`
  @media (max-width: ${device.tablet}) {
    text-align: center;
  }
`;
