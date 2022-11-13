import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { currentUserDataSelector, userIdSelector } from "redux/user/selectors";
import {
  Header,
  ProfileInfoStyled,
  Title,
  UserData,
  Description,
  Img,
  Wrapper,
  Text,
} from "./styles";

const ProfileInfo = () => {
  const userData = useSelector(currentUserDataSelector);
  const userId = useSelector(userIdSelector);

  return (
    <Wrapper>
      <ProfileInfoStyled>
        <Header>
          <Title>Profile</Title>
        </Header>
        <UserData>
          <Img>User image soon</Img>
          <Description>
            <Text>Name: {userData.name}</Text>
            <Text>Email: {userData.email}</Text>
            <Text>Description: {userData.description}</Text>
            <Text>Role: {userData.role}</Text>
          </Description>
        </UserData>
      </ProfileInfoStyled>
    </Wrapper>
  );
};

export default ProfileInfo;
