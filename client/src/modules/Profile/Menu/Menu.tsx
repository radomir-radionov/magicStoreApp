import { MenuItem } from "components";
import { userProfileRoutes } from "constants/pageRoutes";
import { MenuList, MenuStyled } from "./styles";

const Menu = () => {
  return (
    <MenuStyled>
      <MenuList>
        {userProfileRoutes.map(({ id, path, name, Icon }) => (
          <MenuItem key={id} link={path} Icon={Icon}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </MenuStyled>
  );
};

export default Menu;
