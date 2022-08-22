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

const FilterController = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const platform = searchParams.get("platform") || "";
  const criteria = searchParams.get("criteria") || "";
  const genre = searchParams.get("genre") || "";
  const age = searchParams.get("age") || "";
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
    <>
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
    </>
  );
};

export default FilterController;
