import { Outlet } from "react-router-dom";
import { Footer, HumburgerMenu, Header } from "modules";
import { Wrapper, Title, Container } from "./styles";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>M-store</Title>
          <HumburgerMenu />
        </Wrapper>
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
