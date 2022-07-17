import {
  validateInputEmail,
  validateOnlyLetters,
  validatePassword,
} from "utils/validatesInput";
import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(0)
    .required("Name is required")
    .test("Only letters", "Only letters and big than 3 letter", (value) =>
      validateOnlyLetters(value)
    ),
  email: yup
    .string()
    .email("Email is invalid, example: user@gmail.com")
    .required("Email is required")
    .test("Email", "accents not allowed", (value) => validateInputEmail(value)),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .test(
      "one-uppercase character special character and a number",
      "Password must contain at least one uppercase letter, one special character and one number, example: 'Q!1aaa'.",
      (value) => validatePassword(value)
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default schema;
