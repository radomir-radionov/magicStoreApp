import { BUTTON_VARIANTS } from "components/Button/types";
import { AdminPageStyled, AdminControlPanel, ButtonStyled } from "./styles";

const AdminPage = () => {
  const onClickAddGame = () => {
    console.log(1);
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
