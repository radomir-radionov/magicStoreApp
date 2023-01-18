import { Outlet } from "react-router-dom";
import { Menu } from "modules";
import { ProfileStyled } from "./styles";

const ProfilePage = () => {
  return (
    <ProfileStyled>
      <Menu />
      <Outlet />
    </ProfileStyled>
  );
};

export default ProfilePage;
