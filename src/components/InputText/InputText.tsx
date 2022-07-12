import { FC } from "react";
import { InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IProps {
  label?: string;
  htmlFor?: string;
  placeholder?: string;
}

const InputText: FC<IProps> = ({ label, htmlFor, placeholder }) => {
  return (
    <InputWrapper>
      {label && htmlFor && <LabelStyled htmlFor={htmlFor}>{label}</LabelStyled>}
      {label && !htmlFor && <LabelStyled>{label}</LabelStyled>}
      <InputStyled placeholder={placeholder}>Input</InputStyled>;
    </InputWrapper>
  );
};

export default InputText;
