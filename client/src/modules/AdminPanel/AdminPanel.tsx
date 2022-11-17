import { BUTTON_VARIANTS } from "components/Button/types";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import {
  FeaturesBox,
  AdminPanelStyled,
  ButtonStyled,
  Description,
  Title,
} from "./styles";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const onClickOpenModal = (modalType: string) => () => {
    dispatch(modalActionTypes.openModal({ type: modalType }));
  };

  return (
    <AdminPanelStyled>
      <Title>Features</Title>
      <Description>Hello Admin! Here you can utilize next features</Description>
      <FeaturesBox>
        <ButtonStyled
          onClick={onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL)}
          variant={BUTTON_VARIANTS.ADMIN}
        >
          Add game
        </ButtonStyled>
        <ButtonStyled
          onClick={onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL)}
          variant={BUTTON_VARIANTS.ADMIN}
        >
          Delete game
        </ButtonStyled>
        <ButtonStyled
          onClick={onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL)}
          variant={BUTTON_VARIANTS.ADMIN}
        >
          Get users
        </ButtonStyled>
      </FeaturesBox>
    </AdminPanelStyled>
  );
};

export default AdminPanel;
