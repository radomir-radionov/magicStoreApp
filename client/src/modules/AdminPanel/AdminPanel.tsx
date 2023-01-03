import { BUTTON_VARIANTS } from "components/Button/types";
import { MODAL_TYPES } from "modules/ModalWindow/modalTypes";
import { useDispatch } from "react-redux";
import { modalActionTypes } from "redux/modal";
import {
  AdminPanelStyled,
  ButtonStyled,
  Description,
  Title,
  FeaturesBox,
} from "./styles";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const onClickOpenModal = (modalType: string) => () => {
    dispatch(modalActionTypes.openModal({ type: modalType }));
  };

  const btnsData = [
    {
      id: 1,
      content: "Add game",
      action: onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL),
    },
    {
      id: 2,
      content: "Delete game",
      action: onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL),
    },
    {
      id: 3,
      content: "Get users",
      action: onClickOpenModal(MODAL_TYPES.ADD_GAME_MODAL),
    },
  ];

  return (
    <AdminPanelStyled>
      <Title>Features</Title>
      <Description>Hello Admin! Here you can utilize next features</Description>
      <FeaturesBox>
        {btnsData.map((btn) => (
          <ButtonStyled
            id={btn.id}
            onClick={btn.action}
            variant={BUTTON_VARIANTS.ADMIN}
          >
            {btn.content}
          </ButtonStyled>
        ))}
      </FeaturesBox>
    </AdminPanelStyled>
  );
};

export default AdminPanel;
