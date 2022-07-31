import { SearchIcon } from "assets";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { Form, BoxImg, Img, Input } from "./styles";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValue = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    dispatch(gameActions.getSearchedGames(searchText));
  }, [dispatch, searchText]);

  return (
    <Form>
      <BoxImg>
        <Img src={SearchIcon} alt="Search icon" />
      </BoxImg>
      <Input
        type="search"
        placeholder="Enter a game name"
        value={searchText}
        onChange={(e) => {
          onSelectedValue("searchText", e.target.value);
        }}
      />
    </Form>
  );
};

export default SearchBar;
