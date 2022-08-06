import { FooterStyled, Text } from "./styles";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <FooterStyled>
      <Text>Copyright &copy; {year} M-store. All rights reserved.</Text>
    </FooterStyled>
  );
};

export default Footer;
