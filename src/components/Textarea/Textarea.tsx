import { ChangeEvent, ChangeEventHandler, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import {
  TextareaWrapper,
  TextareaStyled,
  LabelStyled,
  ErrorMessage,
} from "./styles";

interface ITextareaProps {
  name: string;
  label: string;
  placeholder: string;
  onChange?:
    | (ChangeEventHandler<HTMLTextAreaElement> &
        ((event: ChangeEvent<HTMLInputElement>) => void))
    | undefined;
  fieldData?: { invalid: boolean; isDirty: boolean };
  errors?: FieldError;
}

type Ref = HTMLTextAreaElement;

const Textarea = forwardRef<Ref, ITextareaProps>(
  (
    {
      name,
      label,
      placeholder,
      onChange,
      fieldData = { invalid: false, isDirty: false },
      errors,
    }: ITextareaProps,
    ref
  ) => {
    const { invalid, isDirty } = fieldData;

    return (
      <TextareaWrapper>
        <LabelStyled
          htmlFor={name}
          invalid={invalid}
          isDirty={isDirty}
          errors={errors}
        >
          {label}
        </LabelStyled>
        <TextareaStyled
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          invalid={invalid}
          isDirty={isDirty}
          errors={errors}
        />
        {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
      </TextareaWrapper>
    );
  }
);
export default Textarea;
