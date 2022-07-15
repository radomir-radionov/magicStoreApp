import { ButtonModal, InputText } from "components";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonsBox, Form, SignInModalStyled, Title } from "./styles";
import schema, { IFormProps } from "./schema";

interface IProps {
  onClose: () => void;
}

const SignInModal: FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldEmail = getFieldState("email");
  const fieldPassword = getFieldState("password");

  const onSubmitHandler = (data: IFormProps) => {
    console.log({ data });
  };

  return (
    <SignInModalStyled>
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputText
          label="Email"
          htmlFor="email"
          placeholder="Enter your email"
          fieldData={fieldEmail}
          errors={errors.email}
          {...register("email")}
        />
        <InputText
          label="Password"
          htmlFor="password"
          placeholder="Enter your password"
          fieldData={fieldPassword}
          errors={errors.password}
          {...register("password")}
        />

        <ButtonsBox>
          <ButtonModal type="submit" disabled={!isDirty || !isValid}>
            Submit
          </ButtonModal>
          <ButtonModal onClick={onClose} type="submit">
            Close
          </ButtonModal>
        </ButtonsBox>
      </Form>
    </SignInModalStyled>
  );
};

export default SignInModal;
