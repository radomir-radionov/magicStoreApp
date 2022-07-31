import { ButtonModal, InputText } from "components";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { userActions } from "redux/user";
import { modalActionTypes } from "redux/modal";
import { ISignInDataRequest } from "types/user";
import { ButtonsBox, Form, SignInModalStyled, Title } from "./styles";

interface IProps {
  onClose: () => void;
}

const SignInModal: FC<IProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<ISignInDataRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldEmail = getFieldState("email");
  const fieldPassword = getFieldState("password");

  const onSubmitHandler = (data: ISignInDataRequest) => {
    dispatch(userActions.login(data));
    dispatch(modalActionTypes.closeModal());
  };

  return (
    <SignInModalStyled>
      <Title>Sign in</Title>
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
