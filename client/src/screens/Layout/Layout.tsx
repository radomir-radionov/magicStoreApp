import { Outlet } from "react-router-dom";
import { Footer, Header } from "modules";
import { Container, LayoutStyled } from "./styles";

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </LayoutStyled>
  );
};

export default Layout;
