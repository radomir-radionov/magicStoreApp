import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./scema";
import { InputText, ButtonModal, Textarea } from "components";
import { Form } from "../SignInModal/styles";
import { useSelector } from "react-redux";
import { getCurrentUserDataSelector } from "redux/user/selectors";
import { useDispatch } from "react-redux";
import { userActions } from "redux/user";

interface IFormProps {
  userId: string;
  newName: string;
  newDescription: string;
  //   newPassword: string;
}

const ChangeUserDataModal = () => {
  const dispatch = useDispatch();
  const { id } = useSelector(getCurrentUserDataSelector);

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
    console.log("NEWNAME:", newName);
    console.log("NEWDESCRIPTION:", newDescription);
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
