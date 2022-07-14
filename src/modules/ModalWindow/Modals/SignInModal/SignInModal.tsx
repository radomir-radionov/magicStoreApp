import { Button, InputText } from "components";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { exampleSchema, IFormInputs } from "./data";
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

  const onSubmit = (data: any) => {
    console.log({ data });
    // dispatch(modalActionTypes.exampleRequest());
  };

  return (
    <SignInModalStyled>
      <Title>Sign in</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          placeholder="Введите ваше имя"
          label="Name"
          htmlFor="name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Button type="submit">Отправить запрос</Button>
        <Button type="submit" onClick={onClose}>
          Закрыть
        </Button>
      </Form>
    </SignInModalStyled>
  );
};

export default SignInModal;
