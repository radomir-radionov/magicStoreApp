import { ReactNode, MouseEvent } from "react";
import { ButtonStyled } from "./styles";

interface IButtonModalProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const ButtonModal = ({
  children,
  onClick,
  disabled = false,
}: IButtonModalProps) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonModal;
