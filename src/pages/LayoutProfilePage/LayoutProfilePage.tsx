import { Outlet } from "react-router-dom";
import { ProfileMenu } from "modules";
import { ProfilePageStyled, WrapperContent } from "./styles";

const LayoutProfilePage = () => {
  return (
    <ProfilePageStyled>
      {/* <Breadcrumbs /> */}
      <WrapperContent>
        <ProfileMenu />
        <Outlet />
      </WrapperContent>
    </ProfilePageStyled>
  );
};

export default LayoutProfilePage;
