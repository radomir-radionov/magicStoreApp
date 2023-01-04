import { useNavigate } from "react-router-dom";
import pageRoutes from "constants/pageRoutes";
import { HumburgerMenu, Navigation } from "modules";
import { SocialLinks } from "components";
import { LetterM } from "assets";
import { Logo, LogoBox, HeaderStyled, Title, Container } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate(pageRoutes.HOME);
  };

  return (
    <HeaderStyled>
      <LogoBox>
        <Logo onClick={onClickLogo} src={LetterM} alt="Logo" />
        <Title>M-Store</Title>
      </LogoBox>
      <HumburgerMenu />
      <Container>
        <Navigation />
      </Container>
      <Container>
        <SocialLinks />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
