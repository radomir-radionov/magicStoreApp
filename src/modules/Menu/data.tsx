import pageRoutes from "constants/pageRoutes";
import { AiFillGithub, AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";

export const socialData = [
  {
    id: 1,
    href: pageRoutes.GIT,
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    href: pageRoutes.LINKEDIN,
    icon: <AiFillLinkedin />,
  },
  { id: 3, href: pageRoutes.GOOGLE, icon: <AiOutlineGoogle /> },
];
