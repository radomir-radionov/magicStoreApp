import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { InputText, ButtonModal, Textarea } from "components";
import { currentUserDataSelector } from "redux/user/selectors";
import { Form } from "./styles";

interface IFormProps {
  userId: string;
  newName: string;
  newDescription: string;
}

const ChangeUserDataModal = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(currentUserDataSelector);

  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isValid },
  } = useForm<IFormProps>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldNewName = getFieldState("newName");

  const onSubmitHandler = ({
    userId = id,
    newName,
    newDescription,
  }: IFormProps) => {
    dispatch(userActions.changeUserData({ userId, newName, newDescription }));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputText
        label="New name"
        htmlFor="newName"
        placeholder="Enter a new name"
        {...register("newName")}
        fieldData={fieldNewName}
        errors={errors.newName}
      />
      <Textarea
        label="New desctiprion"
        {...register("newDescription")}
        placeholder="Enter a new description"
      />
      <ButtonModal type="submit" disabled={!isValid}>
        Submit
      </ButtonModal>
    </Form>
  );
};

export default ChangeUserDataModal;
