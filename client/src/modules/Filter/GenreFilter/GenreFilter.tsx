import { genres } from "constants/filtersData";
import { Form, Label, Option, Select } from "./styles";

interface IGenreFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const GenreFilter = ({ searchParam, onSelectedParams }: IGenreFilterProps) => {
  const handleChange = (e: any) => {
    onSelectedParams("genre", e.target.value);
  };

  return (
    <Form>
      <Label>Genre</Label>
      <Select value={searchParam} onChange={handleChange}>
        <Option value="" disabled hidden>
          Choose here
        </Option>
        {genres.map(({ id, name, value }) => {
          return (
            <Option value={value} key={id}>
              {name}
            </Option>
          );
        })}
      </Select>
    </Form>
  );
};

export default GenreFilter;
