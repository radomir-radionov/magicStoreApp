import { BUTTON_VARIANTS } from "components/Button/types";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import {
  AdminControlPanel,
  AdminPanelStyled,
  ButtonStyled,
  Description,
  Title,
} from "./styles";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const onClickAddGame = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.ADD_GAME_MODAL })
    );
  };

  return (
    <AdminPanelStyled>
      <Title>Features</Title>
      <Description>Hello Admin! Here you can utilize next features</Description>
      <AdminControlPanel>
        <ButtonStyled onClick={onClickAddGame} variant={BUTTON_VARIANTS.ADMIN}>
          Add game
        </ButtonStyled>
      </AdminControlPanel>
    </AdminPanelStyled>
  );
};

export default AdminPanel;
