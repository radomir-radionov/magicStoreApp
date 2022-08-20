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

  const [file, setFile] = useState<any>();
  const [fileName, setFileName] = useState("");

  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadAvatar = async (e: any) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/userAvatar",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  // const [selectedImage, setSelectedImage] = useState<any>(null);

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("profileImg", selectedImage);
  //   axios.post("http://localhost:5000/api/image", formData, {}).then((res) => {
  //     console.log("axios:", formData);
  //     console.log("axios:", res);
  //   });
  //   console.log(formData);
  // };

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
      <div style={{ color: "black" }}>
        {file && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(file)}
            />
          </div>
        )}
        <div>
          <input type="file" onChange={saveFile} />
          <button onClick={uploadAvatar}>Upload</button>
        </div>
      </div>
      {/* <div style={{ color: "black" }}>
        <h1>Upload and Display Image usign React Hook's</h1>
        {selectedImage && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        )}
        <br />

        <br />
        <form onSubmit={onSubmit}>
          <input
            type="file"
            name="myImage"
            onChange={(event: any) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}
    </Wrapper>
  );
};

export default ProfileInfo;
