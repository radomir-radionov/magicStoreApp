import { ages } from "constants/filtersData";
import { Form, Hr, Label, RadioInput, Title } from "./styles";

interface IAgeFilterParams {
  searchParams: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const FilterAge = ({ searchParams, onSelectedParams }: IAgeFilterParams) => {
  return (
    <Form>
      <Title>Age</Title>
      <Hr />
      {ages.map(({ id, value, name }) => (
        <Label key={id}>
          <RadioInput
            type="radio"
            name="age"
            value={searchParams}
            onChange={() => {
              onSelectedParams("age", value);
            }}
            checked={searchParams === value}
          />
          {name}
        </Label>
      ))}
    </Form>
  );
};

export default FilterAge;
