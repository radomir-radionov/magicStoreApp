import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const games = (state: RootState) => state.game;

export const gamesSelector = createSelector(games, (state) => state.games);

export const topGamesSelector = createSelector(
  games,
  (state) => state.topGames
);
