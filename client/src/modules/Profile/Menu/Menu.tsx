import { userProfileRoutes } from "constants/pageRoutes";
import { MenuItem } from "modules";
import { useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import { MenuList, MenuStyled } from "./styles";

const Menu = () => {
  const userRole = useSelector(userSelector.role);

  const userProfileRoutesFiltered = userProfileRoutes.filter(
    (route) => route.role === userRole
  );

  return (
    <MenuStyled>
      <MenuList>
        {userRole === "Admin"
          ? userProfileRoutes.map(({ id, path, name, Icon }) => (
              <MenuItem key={id} link={path} Icon={Icon}>
                {name}
              </MenuItem>
            ))
          : userProfileRoutesFiltered.map(({ id, path, name, Icon }) => (
              <MenuItem key={id} link={path} Icon={Icon}>
                {name}
              </MenuItem>
            ))}
      </MenuList>
    </MenuStyled>
  );
};

export default Menu;
