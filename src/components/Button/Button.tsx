import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface IProps {
  children: ReactNode;
  //   className?: string;
  //   disabled?: boolean;
  //   onClick?: (event: MouseEvent<HTMLElement>) => void;
  //   type?: "button" | "submit";
  //   variant?: BUTTON_VARIANTS;
}

const Button = ({ children }: IProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
