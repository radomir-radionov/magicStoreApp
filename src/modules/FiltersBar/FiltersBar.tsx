import { FilterController } from "modules";
import { FiltersBarStyled, Hr, Title } from "./styles";

const FiltersBar = () => {
  return (
    <FiltersBarStyled>
      <Title>Filter Bar</Title>
      <Hr />
      <FilterController />
    </FiltersBarStyled>
  );
};

export default FiltersBar;
