import { ICustomFile } from "modules/UserAvatar/types";

export const generateURL = (files: File[]): ICustomFile[] => {
  const result = files.map((file: File) =>
    Object.assign(file, {
      preview: URL.createObjectURL(file),
    })
  );

  return result;
};
