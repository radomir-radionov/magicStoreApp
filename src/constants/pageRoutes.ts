import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { AiTwotoneSetting, AiOutlineShoppingCart } from "react-icons/ai";

enum pageRoutes {
  HOME = "/",
  PROFILE = "profile/:id",
  USER_INFO = "userInfo",
  EDIT_PANEL = "editPanel",
  ADMIN_PANEL = "adminPanel",
  CART = "cart",
  PRODUCT = "product",
  ABOUT = "about",
  ADMIN = "admin",
  NOT_FOUND = "*",
}

export const userProfileRoutes = [
  {
    id: 1,
    path: "adminPanel",
    name: "Admin panel",
    Icon: MdAdminPanelSettings,
  },
  { id: 2, path: "editPanel", name: "Edit profile", Icon: AiTwotoneSetting },
  { id: 3, path: "cart", name: "Cart", Icon: AiOutlineShoppingCart },
];

export enum publicRoutes {
  HOME = "/",
}

export enum otherRoutes {
  GIT = "https://github.com/radomir-radionov",
  LINKEDIN = "https://www.linkedin.com/in/radomir-radionov/",
  GOOGLE = "https://www.google.com/",
}

export default pageRoutes;
