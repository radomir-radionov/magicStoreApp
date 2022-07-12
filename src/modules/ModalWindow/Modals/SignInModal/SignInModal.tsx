import { Button, InputText } from "components";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { useForm } from "react-hook-form";
import { Form, SignInModalStyled, Title } from "./styles";

interface IProps {
  onClose: () => void;
}

const SignInModal: FC<IProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(exampleSchema),
  });

  const onSubmit = () => {
    dispatch(modalActionTypes.exampleRequest());
  };

  return (
    <SignInModalStyled>
      <Title>Example modal</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          placeholder="Введите ваше имя"
          label="Имя"
          htmlFor="name"
          {...register("login")}
        />
        <Button type="submit">Отправить запрос</Button>
        <Button onClick={onClose}>Закрыть</Button>
      </Form>
    </SignInModalStyled>
  );
};

export default SignInModal;
