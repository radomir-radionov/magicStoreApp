import { DefaultAvatar } from "assets";
import axios from "axios";
import { ButtonModal } from "components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "redux/user";
import userSelector from "redux/user/selectors";
import { Form, Img, Input, Label, LabelWrapper, ModalStyled } from "./styles";

const ChangeUserImgModal = () => {
  const dispatch = useDispatch();
  const [fileData, setFileData] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const userId = useSelector(userSelector.id);

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
      const avatarURL = URL.createObjectURL(response.data);

      setAvatarURL(avatarURL);
      dispatch(userActions.isDataChangedOnServer(true));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ModalStyled>
      <Img src={avatarURL || DefaultAvatar} alt="New Avatar" />
      <Form onSubmit={uploadFile} encType="multipart/form-data">
        <LabelWrapper>
          <Label htmlFor="inputFile">
            Upload
            <Input id="inputFile" type="file" onChange={getFile} />
          </Label>
        </LabelWrapper>
        <ButtonModal type="submit">Submit</ButtonModal>
      </Form>
    </ModalStyled>
  );
};

export default ChangeUserImgModal;
