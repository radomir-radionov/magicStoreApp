import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(2).required("Name is required"),
  genre: yup.string().min(3).required("Genre is required"),
  description: yup
    .string()
    .min(50)
    .max(160)
    .required("Description is required"),
  price: yup.string().min(1).required("Price is required"),
  age: yup.string().min(1).required("Age is required"),
  img: yup.string().min(1).required("Image is required"),
  platform: yup.array().min(1).required("Platform is required"),
});

export default schema;
