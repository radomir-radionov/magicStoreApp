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

  // const onClickOpenModal = (modalValue: string) => {
  //   dispatch(modalActionTypes.openModal({ type: modalValue }));
  // };

  return (
    <AdminPanelStyled>
      <Title>Features</Title>
      <Description>Hello Admin! Here you can utilize next features</Description>
      <AdminControlPanel>
        {/* <ButtonStyled
          onClick={onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL)}
          variant={BUTTON_VARIANTS.ADMIN}
        >
          Add game
        </ButtonStyled> */}
        {/* <ButtonStyled
          onClick={onClickOpenModal}
          variant={BUTTON_VARIANTS.ADMIN}
        >
          Edit game
        </ButtonStyled> */}
        {/* <ButtonStyled onClick={onClickAddGame} variant={BUTTON_VARIANTS.ADMIN}>
          Delete game
        </ButtonStyled>
        <ButtonStyled onClick={onClickAddGame} variant={BUTTON_VARIANTS.ADMIN}>
          Get users
        </ButtonStyled> */}
      </AdminControlPanel>
    </AdminPanelStyled>
  );
};

export default AdminPanel;
