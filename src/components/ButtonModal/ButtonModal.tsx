import { ReactNode, MouseEvent, FC } from "react";
import { ButtonStyled } from "./styles";

interface IProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const ButtonModal: FC<IProps> = ({ children, onClick, disabled = false }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonModal;
