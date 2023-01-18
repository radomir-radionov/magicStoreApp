import { Select } from "components";
import { capitalize } from "utils/other";
import { FilterStyled, Label } from "./styles";

interface IFilterProps {
  param: any;
  data: any;
  searchParam: string;
  onSelectedParams: (key: string, newParamValue: string) => void;
}

const Filter = ({
  param,
  data,
  searchParam,
  onSelectedParams,
}: IFilterProps) => {
  return (
    <FilterStyled>
      <Label>{capitalize(param)}</Label>
      <Select
        param={param}
        data={data}
        searchParam={searchParam}
        onSelectedParams={onSelectedParams}
      />
    </FilterStyled>
  );
};

export default Filter;
