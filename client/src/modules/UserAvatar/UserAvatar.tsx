import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "redux/user";
import { useDropzone } from "react-dropzone";
import { ButtonModal } from "components";
import generateURL from "utils/onDropUserAvatar";
import { ICustomFile } from "./types";
import { Avatar, UserAvatarStyled, InputStyled } from "./styles";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<ICustomFile[]>([]);
  const defaultAvatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png";

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const filesWithPreview: ICustomFile[] = generateURL(acceptedFiles);
      const result: ICustomFile[] = [...filesWithPreview];
      setFiles(result);
    },
  });

  useEffect(() => {
    dispatch(userActions.setUserImg(files));
  }, [dispatch, files]);

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, []);

  return (
    <UserAvatarStyled {...getRootProps()}>
      {files.length ? (
        files.map((file: ICustomFile) => (
          <Avatar
            key={file?.name}
            src={file?.preview}
            alt="Avatar"
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ))
      ) : (
        <Avatar src={defaultAvatarUrl} alt="Default Avatar" />
      )}
      <InputStyled {...getInputProps()} />
      <ButtonModal>Select file</ButtonModal>
    </UserAvatarStyled>
  );
};

export default UserAvatar;
