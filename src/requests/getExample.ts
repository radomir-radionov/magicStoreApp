import axios from "axios";

export const getExample = async () => {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return result;
};
