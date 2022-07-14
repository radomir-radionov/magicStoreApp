import { ChangeEvent, FC, forwardRef } from "react";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  htmlFor?: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputText: FC<IProps> = forwardRef(
  (
    {
      id = "",
      disabled = false,
      error = "",
      label = "",
      htmlFor = "",
      type = "text",
      onChange,
      placeholder = "",
    }: IProps,
    ref
  ) => {
    return (
      <InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
        <InputStyled
          id={id}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          name={htmlFor}
          type={type}
          ref={ref}
          autocomplete="new-password"
          required
        />
        {label && htmlFor && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
        {label && !htmlFor && <LabelStyled>{label}</LabelStyled>}
      </InputWrapper>
    );
  }
);

export default InputText;
