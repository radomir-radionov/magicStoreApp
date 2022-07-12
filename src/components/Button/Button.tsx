import { ReactNode, MouseEvent, FC } from "react";
import { ButtonStyled } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  //   className?: string;
  //   disabled?: boolean;
  //   onClick?: (event: MouseEvent<HTMLElement>) => void;

  //   variant?: BUTTON_VARIANTS;
}

const Button: FC<IProps> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
