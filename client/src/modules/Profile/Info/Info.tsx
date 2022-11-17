import { useSelector } from "react-redux";
import { currentUserDataSelector, userIdSelector } from "redux/user/selectors";
import {
  Header,
  InfoStyled,
  Title,
  UserData,
  Description,
  Img,
  Wrapper,
  Text,
} from "./styles";

const Info = () => {
  const { name, email, description, role, img } = useSelector(
    currentUserDataSelector
  );

  const arrayBufferToBase64 = (buffer: any, contentType: any) => {
    const base64Flag = `data:${contentType};base64,`;
    let binary = "";
    const bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    const srcImg = base64Flag + window.btoa(binary);
    return srcImg;
  };

  return (
    <Wrapper>
      <InfoStyled>
        <Header>
          <Title>Profile</Title>
        </Header>
        <UserData>
          <Img src={arrayBufferToBase64(img.data.data, img.contentType)} />
          <Description>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Description: {description}</Text>
            <Text>Role: {role}</Text>
          </Description>
        </UserData>
      </InfoStyled>
    </Wrapper>
  );
};

export default Info;
