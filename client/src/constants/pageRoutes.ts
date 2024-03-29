import { MdAdminPanelSettings } from "react-icons/md";
import { AiTwotoneSetting, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

enum pageRoutes {
  HOME = "/",
  PROFILE = "profile/:id",
  PROFILE_INFO = "profileInfo",
  SETTINGS = "settings",
  ADMIN_PANEL = "adminPanel",
  CART = "cart",
  PRODUCT = "product",
  CARD = "product/:id/:name",
  ABOUT = "about",
  ADMIN = "admin",
  NOT_FOUND = "*",

  TEST = "test",
}

export const userProfileRoutes = [
  {
    id: 0,
    path: "",
    name: "Profile",
    role: "User",
    Icon: CgProfile,
  },
  {
    id: 1,
    path: "settings",
    name: "Settings",
    role: "User",
    Icon: AiTwotoneSetting,
  },
  {
    id: 2,
    path: "cart",
    name: "Cart",
    role: "User",
    Icon: AiOutlineShoppingCart,
  },
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
