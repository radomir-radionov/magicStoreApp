import { FilterAge, FilterCriteria, FilterGenre } from "modules";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { FiltersBarStyled, Hr, Title } from "./styles";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { platform } = useParams(); //add platform in an adres

  const criteria = searchParams.get("criteria") || "";
  const genre = searchParams.get("genre") || "";
  const age = searchParams.get("age") || "";
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValues = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const requestData = { age, criteria, genre, platform, searchText };
    dispatch(gameActions.getFilteredGames(requestData));
  }, [dispatch, age, criteria, genre, platform, searchText]);

  return (
    <FiltersBarStyled>
      <Title>Filter Bar</Title>
      <FilterCriteria
        searchParam={criteria}
        onSelectedParams={onSelectedValues}
      />
      <FilterGenre searchParam={genre} onSelectedParams={onSelectedValues} />
      <FilterAge searchParams={age} onSelectedParams={onSelectedValues} />
    </FiltersBarStyled>
  );
};

export default FiltersBar;