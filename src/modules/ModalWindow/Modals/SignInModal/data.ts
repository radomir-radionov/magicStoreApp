import * as yup from "yup";

export interface IFormInputs {
  name: string;
}

export const exampleSchema = yup
  .object({
    name: yup.string().required(),
  })
  .required();
