import { SocialLinks } from "components";
import { FooterStyled, SocialLinksBox, Text } from "./styles";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <FooterStyled>
      <SocialLinksBox>
        <SocialLinks />
      </SocialLinksBox>
      <Text>Copyright &copy; {year} M-Store. All rights reserved.</Text>
    </FooterStyled>
  );
};

export default Footer;
