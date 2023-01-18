import styled from "styled-components";
import { colors } from "styles";

export const TestStyled = styled.div`
  display: block;
  .box {
    input {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    input:focus ~ label {
      outline: -webkit-focus-ring-color auto 5px;
    }

    input:checked + p {
      -webkit-line-clamp: unset;
    }

    input:checked ~ label,
    p:not(.truncated) ~ label {
      display: none;
    }
  }

  .box {
    background-color: #fff;
    box-shadow: 2px 2px 10px #246756;
    padding: 2em;
    width: 15vw;
    max-width: 250px;
    min-width: 150px;

    p {
      margin: 0;
    }

    label {
      border-radius: 4px;
      padding: 0.2em 0.6em;
      border: 1px solid #009ce2;
      background-color: #00acff;
      color: #fff;
      font-size: 0.8em;
    }
  }

  @media screen and (max-width: 600px) {
    .card {
      width: 100%;
    }
  }
`;
