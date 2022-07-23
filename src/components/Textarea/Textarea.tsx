import { ChangeEvent, ChangeEventHandler, forwardRef } from "react";
import { TextareaWrapper, TextareaStyled, Label } from "./styles";

interface IProps {
  name: string;
  label: string;
  placeholder: string;
  onChange?:
    | (ChangeEventHandler<HTMLTextAreaElement> &
        ((event: ChangeEvent<HTMLInputElement>) => void))
    | undefined;
}

const Textarea = forwardRef(
  ({ name, label, placeholder, onChange }: IProps, ref) => {
    return (
      <TextareaWrapper>
        <Label htmlFor={name}>{label}</Label>
        <TextareaStyled
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
        />
      </TextareaWrapper>
    );
  }
);
export default Textarea;
