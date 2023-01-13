import { useSelector } from "react-redux";
import userSelector from "redux/user/selectors";
import { Header, SettingsStyled, Title, ModalWrapper } from "./styles";
import { ChangeUserDataModal, ChangeUserImgModal } from "modules/ModalWindow";

const Settings = () => {
  const userName = useSelector(userSelector.name);

  return (
    <SettingsStyled>
      <Header>
        <Title>Name: {userName}</Title>
      </Header>
      <ModalWrapper>
        <ChangeUserImgModal />
        <ChangeUserDataModal />
      </ModalWrapper>
    </SettingsStyled>
  );
};

export default Settings;
