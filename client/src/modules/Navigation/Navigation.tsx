import { BiExit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import { modalActionTypes } from "redux/modal";
import { userActions } from "redux/user";
import pageRoutes from "constants/pageRoutes";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { Button, Li, NavList, NavStyled } from "./styles";
import { NavItem } from "modules";

const Navigation = () => {
  const dispatch = useDispatch();
  const userId = useSelector(userSelector.id);
  const isAuth = useSelector(userSelector.isAuth);

  const onClickSignInModal = () => {
    dispatch(modalActionTypes.openModal({ type: MODAL_TYPES.SIGN_IN_MODAL }));
  };

  const onClickLogoutHandler = () => {
    dispatch(userActions.logout());
  };

  const NavItemsData = [
    {
      id: 0,
      link: pageRoutes.HOME,
      isAuth,
      action: onClickSignInModal,
      content: "Home",
    },
    {
      id: 1,
      link: `profile/${userId}`,
      isAuth,
      action: onClickSignInModal,
      content: "Profile",
    },
    {
      id: 2,
      link: pageRoutes.PRODUCT,
      isAuth,
      action: onClickSignInModal,
      content: "Product",
    },
    {
      id: 3,
      link: pageRoutes.ABOUT,
      isAuth,
      action: onClickSignInModal,
      content: "About",
    },
  ];

  return (
    <NavStyled>
      <NavList>
        {NavItemsData.map(({ id, link, isAuth, action, content }) => (
          <NavItem key={id} link={link} isAuth={isAuth} action={action}>
            {content}
          </NavItem>
        ))}
        {isAuth && (
          <Li>
            <Button onClick={onClickLogoutHandler}>
              <BiExit />
            </Button>
          </Li>
        )}
      </NavList>
    </NavStyled>
  );
};

export default Navigation;
