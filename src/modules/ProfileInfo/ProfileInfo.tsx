import { useSelector } from "react-redux";
import { currentUserDataSelector } from "redux/user/selectors";
import {
  Description,
  Name,
  ProfileInfoStyled,
  UserData,
  UserImg,
} from "./styles";

const ProfileInfo = () => {
  const userData = useSelector(currentUserDataSelector);

  return (
    <ProfileInfoStyled>
      <UserImg />
      <UserData>
        <Name>Name: {userData.name}</Name>
        <Description>
          Description: {userData.description || "empty..."}
        </Description>
      </UserData>
    </ProfileInfoStyled>
  );
};

export default ProfileInfo;
