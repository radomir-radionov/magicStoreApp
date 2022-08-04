import { ages } from "constants/filtersData";
import { Form, Label, RadioInput, Title } from "./styles";

interface IAgeFilterParams {
  searchParams: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const AgeFilter = ({ searchParams, onSelectedParams }: IAgeFilterParams) => {
  return (
    <Form>
      <Title>Age</Title>
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

export default AgeFilter;
