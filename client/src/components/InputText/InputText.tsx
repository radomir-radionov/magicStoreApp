import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IInputTextProps {
  type?: string;
  label?: string;
  htmlFor?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  fieldData?: { invalid: boolean; isDirty: boolean };
  disabled?: boolean;
  errors?: FieldError;
}

type Ref = HTMLInputElement;

const InputText = forwardRef<Ref, IInputTextProps>(
  (
    {
      type = "text",
      htmlFor = "",
      label = "",
      placeholder = "",
      onChange,
      fieldData = { invalid: false, isDirty: false },
      disabled = false,
      errors,
    }: IInputTextProps,
    ref
  ) => {
    const { invalid, isDirty } = fieldData;

    return (
      <InputWrapper>
        {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
        <InputStyled
          type={type}
          name={htmlFor}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          invalid={invalid}
          isDirty={isDirty}
          errors={errors}
        />
        {label && htmlFor && (
          <LabelStyled
            htmlFor={htmlFor}
            invalid={invalid}
            isDirty={isDirty}
            errors={errors}
          >
            {label}
          </LabelStyled>
        )}
      </InputWrapper>
    );
  }
);

export default InputText;
