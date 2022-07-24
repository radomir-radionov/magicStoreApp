import { criteries } from "constants/filtersData";
import { Criteries, Form, Label, Select, Option, Hr } from "./styles";

interface ICriteriaFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const FilterCriteria = ({
  searchParam,
  onSelectedParams,
}: ICriteriaFilterProps) => {
  return (
    <Form>
      <Criteries>
        <Label>Criteria</Label>
        <Select
          value={searchParam}
          onChange={(e) => {
            onSelectedParams("criteria", e.target.value);
          }}
        >
          {criteries.map(({ id, name, value }) => (
            <Option value={value} key={id}>
              {name}
            </Option>
          ))}
        </Select>
      </Criteries>
      <Hr />
    </Form>
  );
};

export default FilterCriteria;
