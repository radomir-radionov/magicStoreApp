import { platforms } from "constants/filtersData";
import { Form, Label, Select, Option } from "./styles";

interface IPlatformFilterProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const PlatformFilter = ({
  searchParam,
  onSelectedParams,
}: IPlatformFilterProps) => {
  return (
    <Form>
      <Label>Platform</Label>
      <Select
        value={searchParam}
        onChange={(e) => {
          onSelectedParams("platform", e.target.value);
        }}
      >
        <Option value="" disabled hidden>
          Choose here
        </Option>
        {platforms.map(({ id, name, value }) => {
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

export default PlatformFilter;
