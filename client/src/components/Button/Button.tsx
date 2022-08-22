import { ReactNode, MouseEvent } from "react";
import { ButtonStyled } from "./styles";
import { BUTTON_VARIANTS } from "./types";

interface IProps {
  type?: "button" | "submit";
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  variant?: BUTTON_VARIANTS;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  variant = BUTTON_VARIANTS.PRIMARY,
  disabled = false,
}: IProps) => {
  return (
    <ButtonStyled
      className={className}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
