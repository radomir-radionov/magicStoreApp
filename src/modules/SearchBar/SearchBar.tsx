import { SearchIcon } from "assets";
import { Form, BoxImg, Img, Input } from "./styles";

interface ISearchBarProps {
  searchParam: string;
  onSelectedParams: (key: string, searchParam: string) => void;
}

const SearchBar = ({ searchParam, onSelectedParams }: ISearchBarProps) => {
  return (
    <Form>
      <BoxImg>
        <Img src={SearchIcon} alt="Search icon" />
      </BoxImg>
      <Input
        type="search"
        placeholder="Enter a game name"
        value={searchParam}
        onChange={(e) => {
          onSelectedParams("searchText", e.target.value);
        }}
      />
    </Form>
  );
};

export default SearchBar;
