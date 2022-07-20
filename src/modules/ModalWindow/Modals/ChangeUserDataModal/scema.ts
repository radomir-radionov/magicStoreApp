import * as yup from "yup";
import { validateOnlyLetters, validatePassword } from "utils/validatesInput";

export const schema = yup.object().shape({
  newName: yup.string(),
  newDescription: yup.string(),
  //   newPassword: yup
  //     .string()
  //     .min(6, "Password must be at least 6 characters")
  //     .test(
  //       "one-uppercase character special character and a number",
  //       "Password must contain at least one uppercase letter, one special character and one number, example: 'Q!1aaa'.",
  //       (value) => validatePassword(value)
  //     ),
});

export default schema;
