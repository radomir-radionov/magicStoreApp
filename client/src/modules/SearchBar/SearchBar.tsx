import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "assets";
import { Form, Img, Input, Wrapper } from "./styles";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("searchText") || "";

  const onSelectedValue = (key: string, searchParam: string) => {
    searchParams.set(key, searchParam);
    setSearchParams(searchParams);
  };

  const handleChange = (e: any) => {
    onSelectedValue("searchText", e.target.value);
  };

  return (
    <Wrapper>
      <Form>
        <Img src={SearchIcon} alt="Search icon" />
        <Input
          type="search"
          placeholder="Enter a game name"
          value={searchText}
          onChange={handleChange}
        />
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
