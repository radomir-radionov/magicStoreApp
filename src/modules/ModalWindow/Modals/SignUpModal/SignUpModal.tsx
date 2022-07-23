import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { ButtonsBox, Form, SignUpModalStyled, Title } from "./styles";
import { ButtonModal, InputText } from "components";
import { useDispatch } from "react-redux";
import { userActions } from "redux/user";

import { modalActionTypes } from "redux/modal";
import { ISignUpDataRequest } from "types/user";

interface IProps {
  onClose: () => void;
}

const SignUpModal: FC<IProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<ISignUpDataRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldName = getFieldState("name");
  const fieldEmail = getFieldState("email");
  const fieldPassword = getFieldState("password");
  const fieldConfirmPassword = getFieldState("confirmPassword");

  const onSubmitHandler = (data: ISignUpDataRequest) => {
    dispatch(userActions.registration(data));
    dispatch(modalActionTypes.closeModal());
  };

  return (
    <SignUpModalStyled>
      <Title>Sign up</Title>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputText
          label="Name"
          htmlFor="name"
          placeholder="Enter your name"
          fieldData={fieldName}
          errors={errors.name}
          {...register("name")}
        />
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
        <InputText
          label="Confirm Password"
          htmlFor="confirmPassword"
          placeholder="Confirm your password"
          fieldData={fieldConfirmPassword}
          errors={errors.confirmPassword}
          {...register("confirmPassword")}
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
    </SignUpModalStyled>
  );
};

export default SignUpModal;
