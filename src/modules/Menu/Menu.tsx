import { useNavigate } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import { Navigation } from "modules";
import { LetterM } from "assets";
import { socialData } from "./data";
import {
  Link,
  Logo,
  LogoIcon,
  MenuStyled,
  SocialItem,
  Social,
  Title,
} from "./styles";

const Menu = () => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(pageRoutes.HOME);
  };

  return (
    <MenuStyled>
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
    </MenuStyled>
  );
};

export default Menu;
