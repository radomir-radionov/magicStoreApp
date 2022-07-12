import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalInfo, TModalType } from "modules/ModalWindow/modalTypes";

interface IModalInitialState {
  modalType: string;
  modalInfo: object;
  // isModalOpen: boolean;
}

const initialState: IModalInitialState = {
  modalType: "",
  modalInfo: {},
  // isModalOpen: false,
};

const modalSlice = createSlice({
  name: "MODAL",
  initialState,
  reducers: {
    openModal: (
      state: IModalInitialState,
      action: PayloadAction<{ modalType: TModalType; modalInfo?: IModalInfo }>
    ) => {
      const { modalType, modalInfo } = action.payload;
      state.modalType = modalType;
      state.modalInfo = modalInfo || {};
    },
    closeModal: () => initialState,
    exampleRequest: () => {},
  },
});

export const modalActionTypes = modalSlice.actions;

export default modalSlice.reducer;
