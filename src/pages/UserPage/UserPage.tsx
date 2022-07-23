import { useSelector } from "react-redux";
import { getUserNameSelector } from "redux/user/selectors";
import {
  Header,
  Title,
  UserData,
  PersonalInfo,
  UserPageStyled,
} from "./styles";
import { ChangeUserDataModal } from "modules/ModalWindow/Modals";
import { UserAvatar } from "modules";

const UserPage = () => {
  const userName = useSelector(getUserNameSelector);

  return (
    <UserPageStyled>
      <PersonalInfo>
        <Header>
          <Title>Name: {userName}</Title>
        </Header>
        <UserData>
          <UserAvatar />
          <ChangeUserDataModal />
        </UserData>
      </PersonalInfo>
    </UserPageStyled>
  );
};

export default UserPage;
