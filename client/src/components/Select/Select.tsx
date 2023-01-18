import { SelectStyled, Option } from "./styles";

const Select = ({ param, data, searchParam, onSelectedParams }: any) => {
  const handleChange = (e: any) => {
    onSelectedParams(param, e.target.value);
  };

  return (
    <SelectStyled value={searchParam} onChange={handleChange}>
      <Option value="" disabled hidden>
        Choose here
      </Option>
      {data?.map(({ id, name, value }: any) => {
        return (
          <Option value={value} key={id}>
            {name}
          </Option>
        );
      })}
    </SelectStyled>
  );
};

export default Select;
