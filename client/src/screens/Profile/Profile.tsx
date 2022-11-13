import { Outlet } from "react-router-dom";
import { ProfileMenu } from "modules";
import { ProfileStyled, WrapperContent } from "./styles";

const ProfilePage = () => {
  return (
    <ProfileStyled>
      {/* <Breadcrumbs /> */}
      <WrapperContent>
        <ProfileMenu />
        <Outlet />
      </WrapperContent>
    </ProfileStyled>
  );
};

export default ProfilePage;
