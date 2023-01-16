import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const games = (state: RootState) => state.game;

export const gamesSelector = createSelector(games, (state) => state.games);

export const gamesApiSelector = createSelector(
  games,
  (state) => state.gamesApi
);

export const gameDataSelector = createSelector(
  games,
  (state) => state.gameInfo
);

export const topGamesSelector = createSelector(
  games,
  (state) => state.topGames
);

export const searchedGamesSelector = createSelector(
  games,
  (state) => state.searchedGames
);

export const filteredGamesSelector = createSelector(
  games,
  (state) => state.filteredGames
);

export const isLoadingSelector = createSelector(
  games,
  (state) => state.loading
);
