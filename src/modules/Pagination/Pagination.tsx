import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { GameList } from "modules";
import { IGame } from "types/game";
import { RectangleLeft } from "assets";
import {
  PaginationWrapper,
  PaginationStyled,
  PaginationText,
  RightArrowStyled,
  LeftArrowStyled,
} from "./styles";

interface IPaginationProps {
  itemsPerPage: number;
  games: IGame[];
  kindOfGames?: "cartGames";
}

const Pagination = ({ itemsPerPage, games, kindOfGames }: IPaginationProps) => {
  const [currentGames, setCurrentGames] = useState([] as IGame[]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const onClickChangePage = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % games.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setCurrentGames(games.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(games.length / itemsPerPage));
  }, [endOffset, itemOffset, itemsPerPage, games]);

  return (
    <PaginationWrapper display={currentGames?.length}>
      <GameList games={currentGames} kindOfGames={kindOfGames} />
      <PaginationStyled>
        <PaginationText>
          {itemOffset + 1}-{endOffset} of {games.length} items
        </PaginationText>
        <ReactPaginate
          nextLabel={<RightArrowStyled src={RectangleLeft} />}
          previousLabel={<LeftArrowStyled src={RectangleLeft} />}
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          onPageChange={onClickChangePage}
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          containerClassName="pagination"
          pageClassName="pagination__page"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </PaginationStyled>
    </PaginationWrapper>
  );
};

export default Pagination;
