import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonModal } from "components";
import generateURL from "utils/onDropUserAvatar";
import { ICustomFile } from "./types";
import { Avatar, UserAvatarStyled, InputStyled } from "./styles";

const UserAvatar = () => {
  const [files, setFiles] = useState<ICustomFile[]>([]);
  const defaultAvatarUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png";
  console.log("FILES:", files);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      const filesWithPreview: ICustomFile[] = generateURL(acceptedFiles);
      const result: ICustomFile[] = [...files, ...filesWithPreview];
      setFiles(result);
    },
    multiple: false,
  });

  const OnClickSelectFileHandler = () => {
    console.log(files);
  };

  //   useEffect(() => {
  //     // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //     return () =>
  //       files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  //   }, []);

  return (
    <UserAvatarStyled {...getRootProps()}>
      {files.length ? (
        files.map((file: ICustomFile) => (
          <Avatar
            key={file?.name}
            src={file?.preview}
            alt="Avatar"
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        ))
      ) : (
        <Avatar src={defaultAvatarUrl} alt="Default Avatar" />
      )}

      <InputStyled {...getInputProps()} />
      <ButtonModal onClick={OnClickSelectFileHandler}>Select file</ButtonModal>
    </UserAvatarStyled>
  );
};

export default UserAvatar;
