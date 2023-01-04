import { DefaultAvatar } from "assets";
import { useSelector } from "react-redux";
import user from "redux/user/selectors";
import { arrayBufferToBase64 } from "utils/arrayBufferToBase64";
import {
  Header,
  Title,
  UserData,
  Description,
  Img,
  Container,
  Text,
} from "./styles";

const Info = () => {
  const { name, email, description, role, img } = useSelector(user.data);

  const isEmptyImgObj =
    Object.keys(img).length === 0 && img.constructor === Object;

  return (
    <Container>
      <Header>
        <Title>Profile</Title>
      </Header>
      <UserData>
        <Img
          src={
            isEmptyImgObj
              ? DefaultAvatar
              : arrayBufferToBase64(img.data?.data, img.contentType)
          }
          alt="Avatar"
        />
        <Description>
          <Text>Name: {name}</Text>
          <Text>Email: {email}</Text>
          <Text>Description: {description}</Text>
          <Text>Role: {role}</Text>
        </Description>
      </UserData>
    </Container>
  );
};

export default Info;
