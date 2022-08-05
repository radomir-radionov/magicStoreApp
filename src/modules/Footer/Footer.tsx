import { FooterStyled, Text } from "./styles";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <FooterStyled>
      <Text>{year}. All rights reserved &copy;</Text>
    </FooterStyled>
  );
};

export default Footer;
