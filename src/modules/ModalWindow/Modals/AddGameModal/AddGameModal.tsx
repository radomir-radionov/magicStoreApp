import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { INewGameData } from "types/game";
import schema from "./schema";
import { ButtonModal, InputCheckbox, InputText, Textarea } from "components";
import {
  AddGameModalStyled,
  Form,
  InputCheckboxWrapper,
  InteractionPanel,
  Title,
} from "./styles";
import { gameActions } from "redux/game";

interface IAddGameModalProps {
  onClose: () => void;
}

const AddGameModal = ({ onClose }: IAddGameModalProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<INewGameData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const fieldName = getFieldState("name");
  const fieldGenre = getFieldState("genre");
  const fieldDescription = getFieldState("description");
  const fieldPrice = getFieldState("price");
  const fieldAge = getFieldState("age");
  const fieldImg = getFieldState("img");

  const onSubmitHandler = (data: INewGameData) => {
    dispatch(gameActions.addNewGame(data));
    // dispatch(modalActionTypes.closeModal());
  };

  return (
    <AddGameModalStyled>
      <Title>Add game</Title>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputText
          label="Name"
          htmlFor="name"
          placeholder="Enter a game name"
          fieldData={fieldName}
          {...register("name")}
          errors={errors.name}
        />
        <InputText
          label="Genre"
          htmlFor="genre"
          placeholder="Enter a game genre"
          fieldData={fieldGenre}
          {...register("genre")}
          errors={errors.genre}
        />
        <Textarea
          label="New desctiprion"
          placeholder="Enter a new description"
          fieldData={fieldDescription}
          {...register("description")}
          errors={errors.description}
        />
        <InputText
          label="Price"
          htmlFor="price"
          placeholder="Enter a game price"
          fieldData={fieldPrice}
          {...register("price")}
          errors={errors.price}
        />
        <InputText
          label="Age"
          htmlFor="age"
          placeholder="Enter a game age"
          fieldData={fieldAge}
          {...register("age")}
          errors={errors.age}
        />
        <InputText
          label="Img"
          htmlFor="img"
          placeholder="Enter a game image"
          fieldData={fieldImg}
          {...register("img")}
          errors={errors.img}
        />
        <InputCheckboxWrapper>
          {["PC", "Playstation", "Xbox"].map((value) => (
            <InputCheckbox
              key={value}
              value={value}
              label={value}
              htmlFor={value}
              {...register("platform")}
              errors={errors.platform}
            />
          ))}
        </InputCheckboxWrapper>
        <InteractionPanel>
          <ButtonModal type="submit" disabled={!isDirty || !isValid}>
            Submit
          </ButtonModal>
          <ButtonModal onClick={onClose} type="submit">
            Close
          </ButtonModal>
        </InteractionPanel>
      </Form>
    </AddGameModalStyled>
  );
};

export default AddGameModal;
