import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { IGame } from "types/game";
import schema from "./schema";
import { ButtonModal, InputCheckbox, InputText, Textarea } from "components";
import { gameActions } from "redux/game";
import { modalActionTypes } from "redux/modal";
import { modalInfoSelector } from "redux/modal/selectors";
import { platform } from "os";
import {
  EditGameModalStyled,
  Form,
  InputCheckboxWrapper,
  InteractionPanel,
  Title,
} from "./styles";

interface IEditGameModalProps {
  onClose: () => void;
}

const EditGameModal = ({ onClose }: IEditGameModalProps) => {
  const dispatch = useDispatch();
  const modalInfo = useSelector(modalInfoSelector);

  const { _id, name, genre, description, price, age, img, platform } =
    modalInfo.gameData;
  const {
    register,
    handleSubmit,
    getFieldState,
    formState: { errors, isDirty, isValid, dirtyFields },
  } = useForm<IGame>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: name,
      genre: genre,
      description: description,
      price: price,
      age: age,
      img: img,
    },
    mode: "onChange",
  });

  const fieldName = getFieldState("name");
  const fieldGenre = getFieldState("genre");
  const fieldDescription = getFieldState("description");
  const fieldPrice = getFieldState("price");
  const fieldAge = getFieldState("age");
  const fieldImg = getFieldState("img");
  const onSubmitHandler = (data: IGame) => {
    const editedGameData = { id: _id, ...data };
    dispatch(gameActions.editGame(editedGameData));
    dispatch(modalActionTypes.closeModal());
  };

  return (
    <EditGameModalStyled>
      <Title>Edit game</Title>
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
              gamePlatform={platform}
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
    </EditGameModalStyled>
  );
};

export default EditGameModal;
