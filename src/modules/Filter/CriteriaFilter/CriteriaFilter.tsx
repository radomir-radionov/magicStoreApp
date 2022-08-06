import { criteries } from "constants/filtersData";
import { Form, Label, Select, Option } from "./styles";

interface ICriteriaFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const CriteriaFilter = ({
  searchParam,
  onSelectedParams,
}: ICriteriaFilterProps) => {
  return (
    <Form>
      <Label>Criteria</Label>
      <Select
        value={searchParam}
        onChange={(e) => {
          onSelectedParams("criteria", e.target.value);
        }}
      >
        <Option value="" disabled hidden>
          Choose here
        </Option>
        {criteries.map(({ id, name, value }) => (
          <Option value={value} key={id}>
            {name}
          </Option>
        ))}
      </Select>
    </Form>
  );
};

export default CriteriaFilter;
