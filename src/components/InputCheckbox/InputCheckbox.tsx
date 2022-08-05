import { forwardRef } from "react";
import {
  ErrorMessage,
  InputCheckboxStyled,
  InputCheckboxWrapper,
  LabelStyled,
} from "./styles";

interface IInputCheckboxProps {
  key: string;
  type?: string;
  value: any;
  label: string;
  htmlFor: string;
  errors: any;
}

type Ref = HTMLInputElement;

const InputCheckbox = forwardRef<Ref, IInputCheckboxProps>(
  (
    {
      type = "checkbox",
      value,
      label,
      htmlFor,
      errors,
      ...rest
    }: IInputCheckboxProps,
    ref
  ) => {
    return (
      <InputCheckboxWrapper>
        {/* {errors && <ErrorMessage>{errors.message}</ErrorMessage>} */}
        <InputCheckboxStyled type={type} ref={ref} value={value} {...rest} />
        {label && htmlFor && (
          <LabelStyled
            htmlFor={htmlFor}
            //   invalid={invalid}
            //   isDirty={isDirty}
            //   errors={errors}
          >
            {label}
          </LabelStyled>
        )}
      </InputCheckboxWrapper>
    );
  }
);

export default InputCheckbox;
