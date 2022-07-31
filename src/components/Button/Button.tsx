import { ReactNode, MouseEvent } from "react";
import { ButtonStyled } from "./styles";
import { BUTTON_VARIANTS } from "./types";

interface IProps {
  type?: "button" | "submit";
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  variant?: BUTTON_VARIANTS;
  className?: string;
}
//   className?: string;
//   disabled?: boolean;
//   onClick?: (event: MouseEvent<HTMLElement>) => void;

const Button = ({
  children,
  onClick,
  className,
  variant = BUTTON_VARIANTS.PRIMARY,
}: IProps) => {
  return (
    <ButtonStyled className={className} onClick={onClick} $variant={variant}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
