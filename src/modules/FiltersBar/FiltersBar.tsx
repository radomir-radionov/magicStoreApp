import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import {
  AgeFilter,
  CriteriaFilter,
  GenreFilter,
  PlatformFilter,
} from "modules";

import { FiltersBarStyled, Hr, Title } from "./styles";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const platform = searchParams.get("platform") || "";
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
      <Hr />
      <PlatformFilter
        searchParam={platform}
        onSelectedParams={onSelectedValues}
      />
      <CriteriaFilter
        searchParam={criteria}
        onSelectedParams={onSelectedValues}
      />
      <GenreFilter searchParam={genre} onSelectedParams={onSelectedValues} />
      <AgeFilter searchParams={age} onSelectedParams={onSelectedValues} />
    </FiltersBarStyled>
  );
};

export default FiltersBar;
