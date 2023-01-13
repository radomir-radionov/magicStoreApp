import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalInfo, TModalType } from "modules/ModalWindow/modalTypes";

interface IModalInitialState {
  type: string;
  modalInfo: any;
}

const initialState: IModalInitialState = {
  type: "",
  modalInfo: {},
};

const modalSlice = createSlice({
  name: "MODAL",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: TModalType; modalInfo?: IModalInfo }>
    ) => {
      const { type, modalInfo } = action.payload;
      state.type = type;
      state.modalInfo = modalInfo || {};
    },
    closeModal: () => initialState,
  },
});

export const modalActionTypes = modalSlice.actions;

export default modalSlice.reducer;
