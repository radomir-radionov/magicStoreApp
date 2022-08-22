import { Footer, Menu } from "modules";
import { Outlet } from "react-router-dom";
import { Wrapper } from "./styles";

const LayoutPage = () => {
  return (
    <>
      <Menu />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  );
};

export default LayoutPage;
