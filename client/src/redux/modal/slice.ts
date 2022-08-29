import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TModalType } from "modules/ModalWindow/modalTypes";

interface IModalInitialState {
  modalType: string;
}

const initialState: IModalInitialState = {
  modalType: "",
};

const modalSlice = createSlice({
  name: "MODAL",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ modalType: TModalType }>) => {
      const { modalType } = action.payload;
      state.modalType = modalType;
    },
    closeModal: () => initialState,
  },
});

export const modalActionTypes = modalSlice.actions;

export default modalSlice.reducer;
