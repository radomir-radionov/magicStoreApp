import { Outlet } from "react-router-dom";
import { Footer, HumburgerMenu, Menu } from "modules";
import { Header, Title, Wrapper } from "./styles";

const Layout = () => {
  return (
    <>
      <Menu />
      <Wrapper>
        <Header>
          <Title>M-store</Title>
          <HumburgerMenu />
        </Header>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
