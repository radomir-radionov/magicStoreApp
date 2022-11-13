import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { userIdSelector, userNameSelector } from "redux/user/selectors";
import { Wrapper } from "./styles";

const ProfileSettings = () => {
  const userName = useSelector(userNameSelector);
  const userId = useSelector(userIdSelector);

  const [fileData, setFileData] = useState("");
  const [test, setTest] = useState("");
  const getFile = (e: any) => {
    setFileData(e.target.files[0]);
  };

  const uploadFile = async (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", userId);
    data.append("file", fileData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/setImage",
        data,
        { responseType: "blob" }
      );
      const objectURL = URL.createObjectURL(response.data);
      setTest(objectURL);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={uploadFile} encType="multipart/form-data">
        <input type="file" name="file" onChange={getFile} />
        <input type="submit" name="upload" value="Upload" />
      </form>
      <img src={test} alt="" />
      {/* <ProfileSettingsStyled>
        <Header>
          <Title>Name: {userName}</Title>
        </Header>
        <UserData>
          <UserAvatar />
          <ChangeUserDataModal />
        </UserData>
      </ProfileSettingsStyled> */}
    </Wrapper>
  );
};

export default ProfileSettings;
