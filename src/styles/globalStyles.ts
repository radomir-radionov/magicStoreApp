import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import typography from "./typography";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    font-family: ${typography.FONT_FAMILY_MONTSERRAT};
    color: ${colors.TEXT_1};
    background-color: ${colors.BACKGROUND_BODY};
  }

  body {
    font-size: 2rem;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    min-height: 100%;
    width: 100vw;
  }

  ul, ol, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
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
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

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
