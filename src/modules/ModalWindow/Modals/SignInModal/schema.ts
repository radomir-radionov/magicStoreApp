import * as yup from "yup";

export interface IFormProps {
  email: string;
  password: string;
}

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email is invalid, example: user@gmail.com")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default schema;
