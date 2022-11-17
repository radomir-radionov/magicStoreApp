import { forwardRef, useState } from "react";
import {
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
  gamePlatform?: string[];
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
      gamePlatform,
      ...rest
    }: IInputCheckboxProps,
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(false);

    const platforms = ["PC", "Playstation", "Xbox"];

    return (
      <InputCheckboxWrapper>
        {/* {errors && <ErrorMessage>{errors.message}</ErrorMessage>} */}
        <InputCheckboxStyled
          type={type}
          ref={ref}
          value={value}
          defaultChecked={platforms?.map((item) =>
            gamePlatform?.includes(item)
          )}
          {...rest}
        />
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
