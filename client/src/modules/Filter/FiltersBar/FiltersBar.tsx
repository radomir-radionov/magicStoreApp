import { FilterController } from "modules";
import { memo } from "react";
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
