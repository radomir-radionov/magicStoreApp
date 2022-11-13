import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { INewGameData } from "types/game";
import { gameActions } from "redux/game";
import { modalActionTypes } from "redux/modal";
import schema from "./schema";
import { ButtonModal, InputCheckbox, InputText, Textarea } from "components";
import {
  AddGameModalStyled,
  Form,
  InputCheckboxWrapper,
  InteractionPanel,
  Title,
} from "./styles";

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
    defaultValues: {
      name: "",
      genre: "",
      description: "",
      price: "",
      age: "",
      img: "",
    },
    mode: "onChange",
  });

  const nameField = getFieldState("name");
  const genreField = getFieldState("genre");
  const descriptionField = getFieldState("description");
  const priceField = getFieldState("price");
  const ageField = getFieldState("age");
  const imgField = getFieldState("img");

  const onSubmitHandler = (data: INewGameData) => {
    dispatch(gameActions.addNewGame(data));
    dispatch(modalActionTypes.closeModal());
  };

  return (
    <AddGameModalStyled>
      <Title>Add game</Title>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputText
          label="Name"
          htmlFor="name"
          placeholder="Enter a game name"
          fieldData={nameField}
          {...register("name")}
          errors={errors.name}
        />
        <InputText
          label="Genre"
          htmlFor="genre"
          placeholder="Enter a game genre"
          fieldData={genreField}
          {...register("genre")}
          errors={errors.genre}
        />
        <Textarea
          label="New desctiprion"
          placeholder="Enter a new description"
          fieldData={descriptionField}
          {...register("description")}
          errors={errors.description}
        />
        <InputText
          label="Price"
          htmlFor="price"
          placeholder="Enter a game price"
          fieldData={priceField}
          {...register("price")}
          errors={errors.price}
        />
        <InputText
          label="Age"
          htmlFor="age"
          placeholder="Enter a game age"
          fieldData={ageField}
          {...register("age")}
          errors={errors.age}
        />
        <InputText
          label="Img"
          htmlFor="img"
          placeholder="Add a game image"
          fieldData={imgField}
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
