import { ChangeEvent, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IInputTextProps {
  disabled?: boolean;
  errors?: FieldError;
  label?: string;
  htmlFor?: string;
  type?: string;
  fieldData?: { invalid: boolean; isDirty: boolean };
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputText = forwardRef(
  (
    {
      type = "text",
      htmlFor = "",
      label = "",
      disabled = false,
      placeholder = "",
      onChange,
      fieldData = { invalid: false, isDirty: false },
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
