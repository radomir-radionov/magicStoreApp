import { ButtonModal, InputText } from "components";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { userActions } from "redux/user";
import { modalActionTypes } from "redux/modal";
import { ISignInData } from "types/user";
import { Form, InteractionPanel, SignInModalStyled, Title } from "./styles";

interface ISignInModalProps {
  onClose: () => void;
}

const SignInModal = ({ onClose }: ISignInModalProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<ISignInData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldEmail = getFieldState("email");
  const fieldPassword = getFieldState("password");

  const onSubmitHandler = (data: ISignInData) => {
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
        <InteractionPanel>
          <ButtonModal type="submit" disabled={!isDirty || !isValid}>
            Submit
          </ButtonModal>
          <ButtonModal onClick={onClose} type="submit">
            Close
          </ButtonModal>
        </InteractionPanel>
      </Form>
    </SignInModalStyled>
  );
};

export default SignInModal;
