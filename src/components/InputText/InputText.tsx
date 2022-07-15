import { ChangeEvent, FC, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage, InputStyled, InputWrapper, LabelStyled } from "./styles";

interface IProps {
  disabled?: boolean;
  errors?: FieldError;
  label?: string;
  htmlFor?: string;
  type?: string;
  fieldData: { invalid: boolean; isDirty: boolean };

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputText: FC<IProps> = forwardRef(
  (
    {
      type = "text",
      htmlFor = "",
      label = "",
      disabled = false,
      onChange,
      errors,
      fieldData,
      placeholder = "",
    }: IProps,
    ref
  ) => {
    const { invalid, isDirty } = fieldData;

    console.log("fieldData:", invalid, isDirty);

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
          required
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
