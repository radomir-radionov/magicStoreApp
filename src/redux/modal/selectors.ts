import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const modal = (state: RootState) => state.modal;

export const modalTypeSelector = createSelector(
  modal,
  (state) => state.modalType
);
