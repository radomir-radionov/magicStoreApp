import { FilterController } from "modules";
import { FiltersBarStyled, Title } from "./styles";

const FiltersBar = () => {
  return (
    <FiltersBarStyled>
      <Title>Filter Bar</Title>
      <FilterController />
    </FiltersBarStyled>
  );
};

export default FiltersBar;
