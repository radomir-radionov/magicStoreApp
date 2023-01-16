import { ages } from "constants/filtersData";
import { Form, Label, Option, Select } from "./styles";

interface IAgeFilterParams {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const AgeFilter = ({ searchParam, onSelectedParams }: IAgeFilterParams) => {
  return (
    <Form>
      <Label>Age</Label>
      <Select
        value={searchParam}
        onChange={(e) => {
          onSelectedParams("age", e.target.value);
        }}
      >
        <Option value="" disabled hidden>
          Choose here
        </Option>
        {ages.map(({ id, name, value }) => {
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

export default AgeFilter;
