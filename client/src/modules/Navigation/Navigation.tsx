import pageRoutes from "constants/pageRoutes";
import { useSelector } from "react-redux";
import { userIdSelector } from "redux/user/selectors";
import { NavList, NavStyled } from "./styles";
import { NavItem } from "modules";

const Navigation = () => {
  const userId = useSelector(userIdSelector);

  return (
    <NavStyled>
      <NavList>
        <NavItem link={pageRoutes.HOME}>Home</NavItem>
        <NavItem link={`profile/${userId}`}>Profile</NavItem>
        <NavItem link={pageRoutes.PRODUCT}>Product</NavItem>
        <NavItem link={pageRoutes.ABOUT}>About</NavItem>
      </NavList>
    </NavStyled>
  );
};

export default Navigation;
