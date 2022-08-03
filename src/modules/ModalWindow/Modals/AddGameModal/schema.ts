import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  genre: yup.string().required("Genre is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  age: yup.string().required("Age is required"),
  img: yup.string().required("Image is required"),
  // platfotm: yup.array().required("Platfotm is required"),
});

export default schema;
