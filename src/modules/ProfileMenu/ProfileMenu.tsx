import { userProfileRoutes } from "constants/pageRoutes";
import { MenuItem } from "modules";
import { MenuList, ProfileMenuStyled } from "./styles";

const ProfileMenu = () => {
  return (
    <ProfileMenuStyled>
      <MenuList>
        {userProfileRoutes.map(({ id, path, name, Icon }) => (
          <MenuItem key={id} link={path} Icon={Icon}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </ProfileMenuStyled>
  );
};

export default ProfileMenu;
