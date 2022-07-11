import { Menu } from "modules";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default LayoutPage;
