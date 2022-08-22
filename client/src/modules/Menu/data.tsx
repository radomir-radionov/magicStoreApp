import { otherRoutes } from "constants/pageRoutes";
import { AiFillGithub, AiFillLinkedin, AiOutlineGoogle } from "react-icons/ai";

export const socialData = [
  {
    id: 1,
    href: otherRoutes.GIT,
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    href: otherRoutes.LINKEDIN,
    icon: <AiFillLinkedin />,
  },
  { id: 3, href: otherRoutes.GOOGLE, icon: <AiOutlineGoogle /> },
];
