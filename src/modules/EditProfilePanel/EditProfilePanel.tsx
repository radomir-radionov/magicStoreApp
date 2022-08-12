import { UserAvatar } from "modules";
import { ChangeUserDataModal } from "modules/ModalWindow/Modals";
import { useSelector } from "react-redux";
import { userNameSelector } from "redux/user/selectors";

import {
  EditProfilePanelStyled,
  Header,
  PersonalInfo,
  Title,
  UserData,
} from "./styles";

const EditProfilePanel = () => {
  const userName = useSelector(userNameSelector);

  return (
    <EditProfilePanelStyled>
      <PersonalInfo>
        <Header>
          <Title>Name: {userName}</Title>
        </Header>
        <UserData>
          <UserAvatar />
          <ChangeUserDataModal />
        </UserData>
      </PersonalInfo>
    </EditProfilePanelStyled>
  );
};

export default EditProfilePanel;
