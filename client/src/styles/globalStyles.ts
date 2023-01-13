import { ToastContainer } from "react-toastify";
import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";
import device from "./device";
import indents from "./indents";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  html,
  body {
    height: 100%;
    margin: 0;
    padding: ${indents.p_0};
    font-size: 62.5%;
    font-family: ${typography.FONT_FAMILY_MONTSERRAT};
    color: ${colors.TEXT_1};
    background-color: ${colors.BG_BODY};
  }

  body {
    padding-left: ${indents.pl_0};
    font-size: 2rem;
    overflow-x: hidden;

    @media (max-width: ${device.tabletl}) {
    padding: 0;
  }
  }

  #root {
    display: flex;
    min-height: 100%;
  }

  ul, ol, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: ${indents.p_0};
  }
  
  ul, ol, li {
    list-style: none;
  }

  a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }

 button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: ${indents.p_0};
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
textarea, input { outline: none; }

  @media screen and (max-width: 1024px) {
  html {
    font-size: 50%;
    } 
  }

  @media screen and (max-width: 568px) {
  html {
    font-size: 48%;
    }
  }
`;

export default GlobalStyles;

export const ToastContainerStyled = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast--success {
    color: whitesmoke;
    background-color: #1d1d1d;
    border: 1px solid whitesmoke;

    svg {
      fill: #08fdd8;
    }
  }
  .Toastify__toast--error {
    color: whitesmoke;
    background-color: #1d1d1d;
    border: 1px solid whitesmoke;

    svg {
      fill: #fd2155;
    }
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar--success {
    background-color: #08fdd8;
  }
  .Toastify__progress-bar--error {
    background-color: #fd2155;
  }
  .toastProgress--success {
    background: #08fdd8;
  }
  .toastProgress--error {
    background: #fd2155;
  }
`;
