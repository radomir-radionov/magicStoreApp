import { UserAvatar } from "modules";
import { ChangeUserDataModal } from "modules/ModalWindow/Modals";
import { useSelector } from "react-redux";
import { userNameSelector } from "redux/user/selectors";
import {
  EditProfilePanelStyled,
  Header,
  Title,
  UserData,
  Wrapper,
} from "./styles";

const EditProfilePanel = () => {
  const userName = useSelector(userNameSelector);

  return (
    <Wrapper>
      <EditProfilePanelStyled>
        <Header>
          <Title>Name: {userName}</Title>
        </Header>
        <UserData>
          <UserAvatar />
          <ChangeUserDataModal />
        </UserData>
      </EditProfilePanelStyled>
    </Wrapper>
  );
};

export default EditProfilePanel;
