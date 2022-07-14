import * as yup from "yup";

export interface IFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().min(4).max(8).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(8).required(),
  confirmPassword: yup.string().min(4).max(8).required(),
});

export default schema;
