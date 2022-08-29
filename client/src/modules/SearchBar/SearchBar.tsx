import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { gameActions } from "redux/game";
import { SearchIcon } from "assets";
import { Form, Img, Input, Wrapper } from "./styles";

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
    <Wrapper>
      <Form>
        <Img src={SearchIcon} alt="Search icon" />
        <Input
          type="search"
          placeholder="Enter a game name"
          value={searchText}
          onChange={(e) => {
            onSelectedValue("searchText", e.target.value);
          }}
        />
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
