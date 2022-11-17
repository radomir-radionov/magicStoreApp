import { useNavigate } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import { Navigation } from "modules";
import { LetterM } from "assets";
import { socialData } from "./data";
import {
  Link,
  Logo,
  LogoIcon,
  HeaderStyled,
  SocialItem,
  Social,
  Title,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(pageRoutes.HOME);
  };

  return (
    <HeaderStyled>
      <LogoIcon>
        <Logo onClick={onClickNavigate} src={LetterM} alt="Logo" />
        <Title>M-store</Title>
      </LogoIcon>
      <Navigation />
      <Social>
        {socialData.map(({ id, href, icon }) => (
          <SocialItem key={id}>
            <Link href={href} target="_blank">
              {icon}
            </Link>
          </SocialItem>
        ))}
      </Social>
    </HeaderStyled>
  );
};

export default Header;
