import { BUTTON_VARIANTS } from "components/Button/types";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import { AdminPageStyled, AdminControlPanel, ButtonStyled } from "./styles";

const AdminPage = () => {
  const dispatch = useDispatch();

  const onClickAddGame = () => {
    dispatch(
      modalActionTypes.openModal({ modalType: MODAL_TYPES.ADD_GAME_MODAL })
    );
  };

  return (
    <AdminPageStyled>
      <AdminControlPanel>
        <ButtonStyled
          onClick={onClickAddGame}
          variant={BUTTON_VARIANTS.PRIMARY}
        >
          Add game
        </ButtonStyled>
      </AdminControlPanel>
    </AdminPageStyled>
  );
};

export default AdminPage;
