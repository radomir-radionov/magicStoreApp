import { Outlet } from "react-router-dom";
import { Menu } from "modules";
import { ProfileStyled, Container } from "./styles";

const ProfilePage = () => {
  return (
    <ProfileStyled>
      <Container>
        <Menu />
        <Outlet />
      </Container>
    </ProfileStyled>
  );
};

export default ProfilePage;
