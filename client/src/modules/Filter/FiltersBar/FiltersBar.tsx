import {
  AgeFilter,
  CriteriaFilter,
  GenreFilter,
  PlatformFilter,
} from "modules";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { Wrapper, FiltersBarStyled } from "./styles";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const platform = searchParams.get("platform") || "all-platforms";
  const criteria = searchParams.get("criteria") || "";
  const genre = searchParams.get("genre") || "all-genres";
  const age = searchParams.get("age") || "everyone";
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValues = (key: string, newParamValue: string) => {
    searchParams.set(key, newParamValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const requestData = { platform, criteria, genre, age, searchText };
    dispatch(gameActions.getFilteredGames(requestData));
  }, [dispatch, platform, criteria, genre, age, searchText]);

  return (
    <FiltersBarStyled>
      <Wrapper>
        <PlatformFilter
          searchParam={platform}
          onSelectedParams={onSelectedValues}
        />
        <CriteriaFilter
          searchParam={criteria}
          onSelectedParams={onSelectedValues}
        />
        <GenreFilter searchParam={genre} onSelectedParams={onSelectedValues} />
        <AgeFilter searchParam={age} onSelectedParams={onSelectedValues} />
      </Wrapper>
    </FiltersBarStyled>
  );
};

export default FiltersBar;
