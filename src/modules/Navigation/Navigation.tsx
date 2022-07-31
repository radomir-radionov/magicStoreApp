import pageRoutes from "constants/pageRoutes";
import { useSelector } from "react-redux";
import { isAuthSelector } from "redux/user/selectors";
import { NavList, NavStyled } from "./styles";
import { NavItem } from "modules";

const Navigation = () => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <NavStyled>
      <NavList>
        <NavItem link={pageRoutes.HOME}>Home</NavItem>
        <NavItem link={pageRoutes.USER}>User</NavItem>
        <NavItem link={pageRoutes.PRODUCT}>Product</NavItem>
        {isAuth && <NavItem link={pageRoutes.CART}>Cart</NavItem>}
        <NavItem link={pageRoutes.ABOUT}>About</NavItem>
      </NavList>
    </NavStyled>
  );
};

export default Navigation;
