import { Footer, HumburgerMenu, Menu } from "modules";
import { Outlet } from "react-router-dom";
import { Header, Title, Wrapper } from "./styles";

const LayoutPage = () => {
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

export default LayoutPage;
