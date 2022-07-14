import { createSelector } from "@reduxjs/toolkit";

const games = (state: any) => state.games;

export const gamesSelector = createSelector(games, (state) => state.games);
