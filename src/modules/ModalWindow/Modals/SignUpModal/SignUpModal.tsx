import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema, { IFormInputs } from "./data";
import { ButtonsBox, Form, SignUpModalStyled, Title } from "./styles";
import { ButtonModal, InputText } from "components";

interface IProps {
  onClose: () => void;
}

const SignUpModal: FC<IProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
  };

  return (
    <SignUpModalStyled>
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputText
          id="name"
          label="Name"
          htmlFor="name"
          error={errors.name?.message}
          placeholder="Enter your name"
          {...register("name")}
        />
        <InputText
          label="Email"
          htmlFor="email"
          error={errors.email?.message}
          placeholder="Enter your email"
          {...register("email")}
        />
        <InputText
          label="Password"
          htmlFor="password"
          error={errors.password?.message}
          placeholder="Enter your password"
          {...register("password")}
        />
        <InputText
          label="Repeat password"
          htmlFor="confirmPassword"
          error={errors.confirmPassword?.message}
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        <ButtonsBox>
          <ButtonModal type="submit" disabled={!isValid}>
            Submit
          </ButtonModal>
          <ButtonModal onClick={onClose} type="submit">
            Close
          </ButtonModal>
        </ButtonsBox>
      </Form>
    </SignUpModalStyled>
  );
};

export default SignUpModal;
