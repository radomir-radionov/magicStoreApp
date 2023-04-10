import { ages, criteries, genres, platforms } from "constants/filtersData";
import { Filter } from "modules";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { Wrapper, Btn, FiltersBarStyled, IconStyled } from "./styles";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const [isBarShown, setIsBarShown] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const onHandleClick = () => {
    setIsBarShown(!isBarShown);
  };

  const platform = searchParams.get("platform") || "all-platforms";
  const criteria = searchParams.get("criteria") || "name";
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
    <Wrapper>
      <Btn onClick={onHandleClick}>
        <IconStyled />
      </Btn>
      <FiltersBarStyled isBarShown={isBarShown}>
        <Filter
          param="platform"
          data={platforms}
          searchParam={platform}
          onSelectedParams={onSelectedValues}
        />
        <Filter
          param="criteria"
          data={criteries}
          searchParam={criteria}
          onSelectedParams={onSelectedValues}
        />
        <Filter
          param="genre"
          data={genres}
          searchParam={genre}
          onSelectedParams={onSelectedValues}
        />
        <Filter
          param="age"
          data={ages}
          searchParam={age}
          onSelectedParams={onSelectedValues}
        />
      </FiltersBarStyled>
    </Wrapper>
  );
};

export default FiltersBar;
